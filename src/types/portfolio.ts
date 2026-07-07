export type ProjectMetric = {
  label: string;
  value: string;
  context: string;
  verified: boolean;
};

export type ProjectLink = {
  label: string;
  href: string;
  type: "github" | "dashboard" | "case-study" | "demo" | "placeholder";
};

export type MainProject = {
  id: string;
  title: string;
  recruiterTitle: string;
  hook: string;
  problem: string;
  data: string;
  system: string;
  methods: string[];
  outputs: string[];
  reviewSupport: string[];
  tools: string[];
  skills: string[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
  visualType:
    | "dashboard"
    | "schema"
    | "kpi-panel"
    | "pipeline"
    | "forecasting"
    | "fallback";
  visualAsset?: string;
  visualAssets?: { src: string; alt: string }[];
  layout: "text-left" | "visual-left";
  status: "complete" | "in-progress" | "placeholder";
};

export type SecondaryProject = {
  id: string;
  title: string;
  bullets: string[];
  badges: string[];
  links: ProjectLink[];
  status: "complete" | "in-progress" | "placeholder";
};

export type IssuerTheme =
  | "microsoft"
  | "google-cloud"
  | "databricks"
  | "dbt"
  | "snowflake"
  | "google-skillshop"
  | "cisco"
  | "kaggle"
  | "ibm";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  issuerTheme: IssuerTheme;
  skillsGained: string[];
  toolsCovered?: string[];
  roleRelevance: string;
  date?: string;
  credentialUrl?: string;
  image?: string;
  verified: boolean;
};

export type SkillSystemLayer = {
  id: string;
  name: string;
  description: string;
  tools: string[];
  proofProjects: string[];
};

export type ExperienceItem = {
  id: string;
  kind: "education" | "experience";
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string[];
  bullets?: string[];
  verified: boolean;
};
