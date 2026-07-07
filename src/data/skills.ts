import type { SkillSystemLayer } from "../types/portfolio";

export const skillLayers: SkillSystemLayer[] = [
  {
    id: "data-engineering-foundation",
    name: "Data Engineering Foundation",
    description:
      "Ingestion and preparation work that turns raw sources into structured, analysis-ready tables.",
    tools: ["Python ETL", "PostgreSQL", "APIs", "JSON/CSV ingestion", "Data cleaning"],
    proofProjects: [
      "GitHub Engineering Analytics Warehouse",
      "FDA Inspections & Recalls Analytics",
      "Customer Intelligence Warehouse",
    ],
  },
  {
    id: "analytics-engineering-layer",
    name: "Analytics Engineering Layer",
    description:
      "Modeled analytical layers: staging models, star schemas, data marts, metric definitions, and tests.",
    tools: ["SQL", "dbt Core", "Star schemas", "Data marts", "Metric definitions", "Tests"],
    proofProjects: [
      "Customer Intelligence Warehouse",
      "Instacart Intelligence Platform",
      "GitHub Engineering Analytics Warehouse",
    ],
  },
  {
    id: "bi-reporting-layer",
    name: "BI & Reporting Layer",
    description:
      "Reporting assets and BI visuals that support business review: KPI dashboards and executive summaries.",
    tools: [
      "Power BI",
      "KPI dashboards",
      "Reporting assets",
      "Executive summaries",
      "Business-facing outputs",
    ],
    proofProjects: [
      "Customer Intelligence Warehouse",
      "Product Funnel Analytics",
      "Customer RFM Segmentation",
    ],
  },
  {
    id: "applied-analysis-layer",
    name: "Applied Analysis Layer",
    description:
      "Applied analysis on top of modeled data: funnels, segmentation, forecasting, and recommendations.",
    tools: [
      "Product funnels",
      "RFM segmentation",
      "Basket analysis",
      "Forecasting",
      "Experimentation",
      "Recommendation systems",
    ],
    proofProjects: [
      "Product Funnel Analytics",
      "AQI Extreme Value Forecasting",
      "RetailRocket Recommendation System",
    ],
  },
];
