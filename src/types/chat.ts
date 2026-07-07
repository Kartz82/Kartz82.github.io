/** A bullet is plain text or a clickable label. */
export type ChatBullet = string | { text: string; href: string };

/** A single canned answer: short intro sentence and/or a short bullet list. */
export type ChatAnswer = {
  intro?: string;
  bullets?: ChatBullet[];
  followUp?: { label: string; href: string };
};

export type ChatIntent = {
  id: string;
  /** Lowercase keywords/phrases that trigger this intent. Scored by match count. */
  keywords: string[];
  answer: ChatAnswer;
};

export type ChatMessage = {
  id: string;
  role: "user" | "bot";
  answer: ChatAnswer;
  /** Plain text form, used for user echo and aria-live. */
  text: string;
};
