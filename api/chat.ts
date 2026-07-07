import type { VercelRequest, VercelResponse } from "@vercel/node";
import { KNOWLEDGE } from "./_knowledge";

const ALLOWED_ORIGINS = new Set([
  "https://kartz82.github.io",
  "http://localhost:5173",
  "http://localhost:4173",
]);

const MODEL = process.env.GEMINI_MODEL ?? "gemini-2.5-flash";

const SYSTEM_PROMPT = `You are the portfolio assistant on Kartikeya Vemula's website. Recruiters ask you quick questions.

Rules:
- Answer ONLY from the knowledge base below. If it isn't covered there, say you don't have that detail and point to the resume or email. Never invent facts, numbers, employers, or links.
- Be extremely terse. Recruiters skim: one short intro sentence, then at most 4 short bullets. Skip bullets entirely for simple answers.
- You CAN reason across the document: comparisons ("largest dataset", "second strongest project"), rankings, and summaries are encouraged — the ranking and comparison sections exist for this.
- Third person ("he", "Kartikeya"). Professional, plain language, no hype words.
- For contact questions, give the labeled links (Email, LinkedIn: Kartikeya Vemula, GitHub: Kartz82).

Respond as JSON: {"intro": string, "bullets": string[] (optional, max 4, each under 90 chars), "followUp": {"label": string, "href": string} (optional, one relevant link)}.

KNOWLEDGE BASE:
${KNOWLEDGE}`;

function setCors(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin ?? "";
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(req, res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(503).json({ error: "Assistant not configured" });

  const question = typeof req.body?.question === "string" ? req.body.question.trim() : "";
  if (!question) return res.status(400).json({ error: "Missing question" });
  if (question.length > 400) return res.status(400).json({ error: "Question too long" });

  // Short rolling history keeps follow-ups ("and the second one?") coherent.
  const history: { role: string; text: string }[] = Array.isArray(req.body?.history)
    ? req.body.history.slice(-6).filter(
        (t: unknown): t is { role: string; text: string } =>
          typeof t === "object" &&
          t !== null &&
          typeof (t as { text?: unknown }).text === "string" &&
          ((t as { role?: unknown }).role === "user" ||
            (t as { role?: unknown }).role === "bot"),
      )
    : [];

  const contents = [
    ...history.map((turn) => ({
      role: turn.role === "bot" ? "model" : "user",
      parts: [{ text: turn.text.slice(0, 500) }],
    })),
    { role: "user", parts: [{ text: question }] },
  ];

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 2048,
            responseMimeType: "application/json",
          },
        }),
      },
    );

    if (!response.ok) {
      const detail = await response.text();
      console.error("Gemini error", response.status, detail.slice(0, 300));
      return res.status(502).json({ error: "Upstream model error" });
    }

    const data = await response.json();
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    const parsed = JSON.parse(raw);

    const intro = typeof parsed.intro === "string" ? parsed.intro.slice(0, 400) : undefined;
    const bullets = Array.isArray(parsed.bullets)
      ? parsed.bullets
          .filter((b: unknown): b is string => typeof b === "string")
          .slice(0, 4)
          .map((b: string) => b.slice(0, 160))
      : undefined;
    const followUp =
      parsed.followUp &&
      typeof parsed.followUp.label === "string" &&
      typeof parsed.followUp.href === "string" &&
      /^(https:\/\/|mailto:|\/)/.test(parsed.followUp.href)
        ? { label: parsed.followUp.label.slice(0, 60), href: parsed.followUp.href }
        : undefined;

    if (!intro && !bullets?.length) {
      return res.status(502).json({ error: "Empty answer" });
    }
    return res.status(200).json({ intro, bullets, followUp });
  } catch (error) {
    console.error("Chat handler failed", error);
    return res.status(502).json({ error: "Assistant unavailable" });
  }
}
