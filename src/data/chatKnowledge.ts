import type { ChatAnswer, ChatIntent } from "../types/chat";
import { links } from "./links";

/**
 * Static knowledge base for the portfolio assistant.
 * Answers are deliberately terse: one short intro and/or up to four short
 * bullets. Every fact here mirrors the verified data used on the page.
 */

export const SUGGESTED_QUESTIONS = [
  "Strongest project?",
  "What's his tech stack?",
  "Which certifications?",
  "How do I contact him?",
];

export const GREETING: ChatAnswer = {
  intro:
    "Hi — ask me anything about Kartikeya's projects, stack, certifications, or how to reach him.",
};

export const FALLBACK: ChatAnswer = {
  intro: "Not sure about that one. I can answer questions like:",
  bullets: [
    "“Strongest project?”",
    "“What tools does he use?”",
    "“What's his education?”",
    "“How do I contact him?”",
  ],
};

export const chatIntents: ChatIntent[] = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "yo", "good morning", "good afternoon"],
    answer: GREETING,
  },
  {
    id: "strongest-project",
    keywords: ["strongest", "best project", "top project", "flagship", "most impressive", "favorite"],
    answer: {
      intro: "Customer Intelligence Warehouse is the flagship:",
      bullets: [
        "1M+ retail transactions modeled in PostgreSQL + dbt Core",
        "14 dbt models, 41 tests passing",
        "3 Power BI reporting pages for business review",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Kartz82/customer-intelligence-warehouse",
      },
    },
  },
  {
    id: "projects-overview",
    keywords: ["projects", "portfolio", "what has he built", "built", "work", "systems", "show me"],
    answer: {
      intro: "Five main systems, three supporting builds. The main five:",
      bullets: [
        "Customer Intelligence Warehouse — dbt Core + Power BI",
        "Instacart Intelligence Platform — basket & segment analytics",
        "Product Funnel Analytics — funnel, attribution, A/B readouts",
        "Customer RFM Segmentation + AQI Extreme Value Forecasting",
      ],
    },
  },
  {
    id: "project-warehouse",
    keywords: ["warehouse", "dbt", "star schema", "customer intelligence", "postgres", "postgresql"],
    answer: {
      intro: "Customer Intelligence Warehouse — retail analytics warehouse:",
      bullets: [
        "PostgreSQL + dbt Core: 14 models, 41 tests passed",
        "1,062,984+ transactions, 5,876 customers, 43 countries",
        "3 Power BI pages: executive, customer value, return risk",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Kartz82/customer-intelligence-warehouse",
      },
    },
  },
  {
    id: "project-instacart",
    keywords: ["instacart", "grocery", "basket", "market basket", "affinity"],
    answer: {
      intro: "Instacart Intelligence Platform — SQL-first grocery analytics:",
      bullets: [
        "3,421,083 orders / 206,209 customers / 49,688 products",
        "Basket affinity, category performance, segment profiles",
        "Largest segment: 69,635 moderate-engagement customers",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Kartz82/instacart-intelligence-platform",
      },
    },
  },
  {
    id: "project-funnel",
    keywords: ["funnel", "a/b", "ab test", "experiment", "attribution", "conversion", "growth"],
    answer: {
      intro: "Product Funnel Analytics — funnel, attribution, and a live A/B readout:",
      bullets: [
        "6.92% relative conversion lift (15.88% vs 14.86%)",
        "p = 0.04391 on ~20K users",
        "Funnel drop-off + channel attribution reporting views",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Kartz82/growth-funnel-intelligence",
      },
    },
  },
  {
    id: "project-rfm",
    keywords: ["rfm", "segmentation", "churn", "retention", "customer segments"],
    answer: {
      intro: "Customer RFM Segmentation — scoring and churn-risk views:",
      bullets: [
        "5,878 customers scored across 805,549 transactions",
        "Champions hold 68.12% of historical revenue",
        "89 high-value customers flagged at churn risk",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Kartz82/customer-segmentation-rfm",
      },
    },
  },
  {
    id: "project-aqi",
    keywords: ["aqi", "air quality", "forecast", "forecasting", "extreme value", "evt", "baltimore"],
    answer: {
      intro: "AQI Extreme Value Forecasting — ensemble + tail-risk modeling:",
      bullets: [
        "17 years of EPA Baltimore data; PM2.5 & NO2 key drivers",
        "Ensemble RMSE ~9.8, R² 0.84",
        "Generalized Pareto Distribution for extreme-event risk",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Kartz82/Extreme-Value-AQI-Prediction-for-Baltimore-City",
      },
    },
  },
  {
    id: "project-recsys",
    keywords: ["recsys", "recommendation", "recommender", "retailrocket", "als", "faiss"],
    answer: {
      intro: "RetailRocket RecSys — implicit-feedback recommender:",
      bullets: [
        "2.7M interactions, ~1.4M users × 235K items",
        "ALS (50 factors) + FAISS item-to-item search",
        "Sub-10ms top-K inference on CPU",
      ],
      followUp: { label: "View repo", href: "https://github.com/Kartz82/RecSys" },
    },
  },
  {
    id: "project-fda",
    keywords: ["fda", "adverse", "recall", "inspection", "regulatory"],
    answer: {
      intro: "FDA Adverse Event Analytics — regulatory record linking:",
      bullets: [
        "300K+ inspections linked to 90K+ recalls via FEI",
        "Surfaced ~266,800 inspections with no linked recall",
      ],
      followUp: {
        label: "View repo",
        href: "https://github.com/Kartz82/fda-adverse-event-analytics",
      },
    },
  },
  {
    id: "stack",
    keywords: ["stack", "tools", "technologies", "tech", "skills", "languages", "software"],
    answer: {
      intro: "Core stack, organized in four layers:",
      bullets: [
        "Engineering: Python ETL, PostgreSQL, APIs",
        "Modeling: SQL, dbt Core, star schemas, tests",
        "Reporting: Power BI, KPI dashboards",
        "Analysis: funnels, RFM, forecasting, recommenders",
      ],
    },
  },
  {
    id: "sql-dbt",
    keywords: ["sql only", "how good is his sql", "dbt core", "modeling"],
    answer: {
      intro: "SQL and dbt Core are the backbone:",
      bullets: [
        "Warehouse project: 14 dbt models, 41 tests",
        "Kaggle Advanced SQL + dbt Fundamentals certified",
      ],
    },
  },
  {
    id: "certificates",
    keywords: ["certificate", "certification", "certified", "credential", "badges"],
    answer: {
      intro: "10 certifications. Highlights:",
      bullets: [
        "Microsoft Power BI Data Analyst Associate",
        "Google Cloud Professional Data Engineer + Associate CE",
        "dbt Fundamentals, Snowflake, Databricks",
        "Google Analytics, Cisco, Kaggle Advanced SQL, IBM",
      ],
    },
  },
  {
    id: "education",
    keywords: ["education", "degree", "school", "university", "umbc", "gpa", "masters", "study"],
    answer: {
      intro: "M.S. Data Science, University of Maryland Baltimore County (Aug 2024 – May 2026).",
      bullets: [
        "Carnegie R1 Research University, GPA 3.78 / 4.0",
        "Focus: ML, statistical modeling, experimental design, time series",
      ],
    },
  },
  {
    id: "experience",
    keywords: ["experience", "job", "worked", "employer", "company", "internship", "years"],
    answer: {
      intro:
        "Professional experience details aren't listed on this site yet — the resume is the best source.",
      followUp: { label: "Download resume", href: links.resume },
    },
  },
  {
    id: "roles",
    keywords: ["role", "open to", "looking for", "hiring", "position", "relocate", "relocation", "available", "opportunity"],
    answer: {
      intro: "Open to these roles:",
      bullets: [
        "Analytics Engineer (primary)",
        "Data Analyst / Product Analyst",
        "Data Scientist",
      ],
      followUp: { label: `Email ${links.email}`, href: `mailto:${links.email}` },
    },
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "linkedin", "github", "resume", "cv", "connect", "hire"],
    answer: {
      intro: "Fastest ways to reach Kartikeya:",
      bullets: [
        { text: `Email: ${links.email}`, href: `mailto:${links.email}` },
        { text: "LinkedIn: Kartikeya Vemula", href: links.linkedin ?? "#" },
        { text: "GitHub: Kartz82", href: links.github },
      ],
      followUp: { label: "Download resume", href: links.resume },
    },
  },
  {
    id: "about",
    keywords: ["who is", "about", "summary", "background", "intro"],
    answer: {
      intro:
        "Analytics engineer–leaning data professional: structures messy data, models the analytical layer, defines metrics, and ships reporting assets.",
      bullets: [
        "5 full analytics systems + 3 supporting builds",
        "M.S. Data Science @ UMBC (GPA 3.78)",
        "10 certifications across BI, cloud, and modeling",
      ],
    },
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "great", "cool", "awesome", "nice"],
    answer: {
      intro: "Anytime. Anything else — projects, stack, or contact info?",
    },
  },
];
