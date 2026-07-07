import { ChatCircleDots, PaperPlaneRight, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  chatIntents,
  FALLBACK,
  GREETING,
  SUGGESTED_QUESTIONS,
} from "../../data/chatKnowledge";
import type { ChatAnswer, ChatBullet, ChatMessage } from "../../types/chat";

const bulletText = (bullet: ChatBullet) =>
  typeof bullet === "string" ? bullet : bullet.text;

/** Score a query against an intent's keywords; word-boundary match for single words. */
function scoreIntent(query: string, keywords: string[]): number {
  let score = 0;
  for (const keyword of keywords) {
    if (keyword.includes(" ")) {
      if (query.includes(keyword)) score += 2;
    } else {
      // Tolerate simple plurals ("certification" matches "certifications").
      const pattern = new RegExp(
        `\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(s|es)?\\b`,
        "i",
      );
      if (pattern.test(query)) score += 1;
    }
  }
  return score;
}

function resolveAnswer(rawQuery: string): ChatAnswer {
  const query = rawQuery.toLowerCase().trim();
  let best: { score: number; answer: ChatAnswer } = { score: 0, answer: FALLBACK };
  for (const intent of chatIntents) {
    const score = scoreIntent(query, intent.keywords);
    if (score > best.score) best = { score, answer: intent.answer };
  }
  return best.answer;
}

function answerToText(answer: ChatAnswer): string {
  return [answer.intro, ...(answer.bullets ?? []).map(bulletText)]
    .filter(Boolean)
    .join(" ");
}

let messageId = 0;
const nextId = () => `msg-${++messageId}`;

function BotMessage({ answer }: { answer: ChatAnswer }) {
  const reduce = useReducedMotion();
  return (
    <div className="max-w-[92%]">
      {answer.intro && (
        <p className="text-[13.5px] leading-relaxed text-[#16181d]">{answer.intro}</p>
      )}
      {answer.bullets && (
        <ul className="mt-1.5 space-y-1.5">
          {answer.bullets.map((bullet, i) => (
            <motion.li
              key={bulletText(bullet)}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-2 text-[13px] leading-snug text-[#4b4f58]"
            >
              <span
                aria-hidden="true"
                className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-[#e8480c]/60"
              />
              {typeof bullet === "string" ? (
                bullet
              ) : (
                <a
                  href={bullet.href}
                  rel="noreferrer"
                  target={bullet.href.startsWith("http") ? "_blank" : undefined}
                  className="underline decoration-[#e8480c]/40 underline-offset-2 transition-colors hover:text-[#c23a08] hover:decoration-[#e8480c]"
                >
                  {bullet.text}
                </a>
              )}
            </motion.li>
          ))}
        </ul>
      )}
      {answer.followUp && (
        <a
          href={answer.followUp.href}
          rel="noreferrer"
          {...(answer.followUp.href.startsWith("/") ? { download: true } : {})}
          className="mt-2.5 inline-block rounded-full border border-[#16181d]/20 px-3.5 py-1 text-xs font-medium text-[#16181d] transition-colors hover:border-[#e8480c] hover:text-[#c23a08]"
        >
          {answer.followUp.label}
        </a>
      )}
    </div>
  );
}

/**
 * Static portfolio assistant: bottom-right trigger, solid paper-card panel,
 * keyword-matched answers from a curated knowledge base. Text only, no
 * backend, no keys.
 */
export function PortfolioAssistant() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const showChips = messages.filter((m) => m.role === "user").length === 0;

  const ask = (raw: string) => {
    const question = raw.trim();
    if (!question) return;
    const answer = resolveAnswer(question);
    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: "user", answer: { intro: question }, text: question },
      { id: nextId(), role: "bot", answer, text: answerToText(answer) },
    ]);
    setInput("");
  };

  // Autofocus input and greet on first open.
  useEffect(() => {
    if (!open) return;
    setEverOpened(true);
    if (messages.length === 0) {
      setMessages([{ id: nextId(), role: "bot", answer: GREETING, text: answerToText(GREETING) }]);
    }
    const t = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Keep the newest message in view.
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages]);

  // Esc closes and returns focus to the trigger.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="portfolio-assistant"
        aria-label={open ? "Close assistant" : "Ask about Kartikeya"}
        className="fixed right-5 bottom-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#16181d] p-3.5 text-[#f7f6f3] shadow-[0_10px_30px_rgba(22,24,29,0.35)] transition-colors hover:bg-[#e8480c] active:scale-95"
      >
        {open ? <X size={22} weight="bold" /> : <ChatCircleDots size={24} weight="fill" />}
        {!everOpened && (
          <span
            aria-hidden="true"
            className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#f7f6f3] bg-[#e8480c]"
          />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="portfolio-assistant"
            role="dialog"
            aria-label="Portfolio assistant"
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="paper-card fixed right-4 bottom-22 z-50 flex max-h-[min(600px,calc(100dvh-7rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl !shadow-[0_24px_70px_rgba(22,24,29,0.22)] sm:right-5"
          >
            {/* header */}
            <div className="relative border-b border-[#16181d]/10 px-5 py-3.5">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#e8480c] to-transparent"
              />
              <p className="font-display text-sm font-bold text-[#16181d]">
                Ask about Kartikeya
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8a8e98]">
                Portfolio assistant · no AI calls
              </p>
            </div>

            {/* message log */}
            <div
              ref={logRef}
              role="log"
              aria-live="polite"
              className="flex-1 space-y-4 overflow-y-auto px-5 py-4"
            >
              {messages.map((message) =>
                message.role === "user" ? (
                  <div key={message.id} className="flex justify-end">
                    <p className="max-w-[85%] rounded-2xl rounded-br-md bg-[#16181d] px-3.5 py-2 text-[13px] leading-snug text-[#f7f6f3]">
                      {message.text}
                    </p>
                  </div>
                ) : (
                  <motion.div
                    key={message.id}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <BotMessage answer={message.answer} />
                  </motion.div>
                ),
              )}

              {showChips && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {SUGGESTED_QUESTIONS.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => ask(question)}
                      className="rounded-full border border-[#16181d]/15 bg-white px-3 py-1.5 font-mono text-[11px] text-[#4b4f58] transition-colors hover:border-[#e8480c] hover:text-[#c23a08]"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* input */}
            <form
              className="flex items-center gap-2 border-t border-[#16181d]/10 px-4 py-3"
              onSubmit={(event) => {
                event.preventDefault();
                ask(input);
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question…"
                aria-label="Ask a question about Kartikeya"
                className="min-w-0 flex-1 rounded-full border border-[#16181d]/15 bg-white px-4 py-2 text-[16px] text-[#16181d] outline-none placeholder:text-[#8a8e98] focus:border-[#e8480c]/60 sm:text-sm"
              />
              <button
                type="submit"
                aria-label="Send question"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#16181d] text-[#f7f6f3] transition-colors hover:bg-[#e8480c] active:scale-95 disabled:opacity-40"
                disabled={!input.trim()}
              >
                <PaperPlaneRight size={16} weight="fill" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
