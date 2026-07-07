import type { MainProject, SecondaryProject } from "../types/portfolio";

export const mainProjects: MainProject[] = [
  {
    id: "customer-intelligence-warehouse",
    title: "Customer Intelligence Warehouse",
    recruiterTitle: "dbt Core warehouse with executive reporting assets",
    hook: "A retail analytics warehouse: dbt Core models, a star schema, and Power BI reporting assets that support business review.",
    problem:
      "Raw retail transaction data holds customer value, product performance, and return-risk signals, but without a modeled layer the metrics stay inconsistent and hard to review.",
    data: "Retail transaction records covering customers, orders, products, and returns, ingested into PostgreSQL and structured through staged models.",
    system:
      "PostgreSQL warehouse with dbt Core staging and mart models, a star schema around orders and customers, tested metric definitions, and Power BI reporting on top of the marts.",
    methods: [
      "Data modeling (staging to marts)",
      "Star schema design",
      "Metric definitions with dbt tests",
      "Customer value analysis",
      "Return-risk analysis",
    ],
    outputs: [
      "Executive overview reporting page",
      "Customer value reporting page",
      "Product return-risk reporting page",
      "Documented, tested dbt Core model layer",
    ],
    reviewSupport: [
      "Business Review Support: executive overview of revenue, orders, and customer movement",
      "Reporting Assets: customer value and product return-risk pages for recurring review",
      "Analytical Layer: modeled metrics consumed directly by BI reporting",
    ],
    tools: ["PostgreSQL", "dbt Core", "SQL", "Power BI"],
    skills: ["Data modeling", "Metric design", "Analytics engineering", "BI reporting"],
    metrics: [
      {
        label: "Analytical layer",
        value: "dbt Core",
        context: "staging and mart models with tests",
        verified: true,
      },
      {
        label: "Reporting assets",
        value: "3 pages",
        context: "executive, customer value, return risk",
        verified: true,
      },
      {
        label: "dbt models",
        value: "14",
        context: "built successfully",
        verified: true,
      },
      {
        label: "dbt tests",
        value: "41",
        context: "passed",
        verified: true,
      },
      {
        label: "Transactions",
        value: "1,062,984+",
        context: "RFM dataset profile",
        verified: true,
      },
      {
        label: "Customers",
        value: "5,876",
        context: "customer lifetime value export: 5,047 rows",
        verified: true,
      },
      {
        label: "Products",
        value: "4,000+",
        context: "across 43 countries",
        verified: true,
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Kartz82/customer-intelligence-warehouse",
        type: "github",
      },
    ],
    visualType: "dashboard",
    visualAsset: "/assets/projects/customer-intelligence-warehouse/executive_overview.png",
    visualAssets: [
      {
        src: "/assets/projects/customer-intelligence-warehouse/executive_overview.png",
        alt: "Executive overview reporting page for the Customer Intelligence Warehouse",
      },
      {
        src: "/assets/projects/customer-intelligence-warehouse/customer_value.png",
        alt: "Customer value reporting page",
      },
      {
        src: "/assets/projects/customer-intelligence-warehouse/product_return_risk.png",
        alt: "Product return-risk reporting page",
      },
    ],
    layout: "text-left",
    status: "complete",
  },
  {
    id: "instacart-intelligence-platform",
    title: "Instacart Intelligence Platform",
    recruiterTitle: "Grocery basket and segment analytics on the Instacart dataset",
    hook: "SQL-first analysis of the public Instacart grocery dataset: basket affinity, category performance, and customer segments as reporting assets.",
    problem:
      "Online grocery orders carry repeat-purchase structure, but basket affinity and segment behavior only become reviewable once the order data is modeled and summarized.",
    data: "The public Instacart online grocery dataset: orders, products, aisles, and departments, restructured into analysis tables.",
    system:
      "A structured SQL workflow that models orders into analytical tables, then layers basket affinity, category performance, and segmentation outputs into BI visuals.",
    methods: [
      "Basket affinity analysis",
      "Category performance analysis",
      "Customer segmentation",
      "SQL data modeling",
    ],
    outputs: [
      "Basket affinity map",
      "Category performance reporting view",
      "Customer segment profiles",
    ],
    reviewSupport: [
      "Product Review Support: category and basket patterns for assortment review",
      "Reporting Assets: segment and category visuals for recurring review",
      "Analytical Layer: reusable order-level analysis tables",
    ],
    tools: ["SQL", "Python", "Pandas", "BI visuals"],
    skills: ["Data modeling", "Basket analysis", "Segmentation", "Applied analysis"],
    metrics: [
      {
        label: "Dataset",
        value: "Instacart",
        context: "public online grocery dataset",
        verified: true,
      },
      {
        label: "Order volume",
        value: "[PLACEHOLDER]",
        context: "add verified counts",
        verified: false,
      },
      {
        label: "Segments",
        value: "[PLACEHOLDER]",
        context: "add verified segment count",
        verified: false,
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Kartz82/instacart-intelligence-platform",
        type: "github",
      },
    ],
    visualType: "dashboard",
    visualAsset: "/assets/projects/instacart-intelligence-platform/basket_affinity_map.png",
    visualAssets: [
      {
        src: "/assets/projects/instacart-intelligence-platform/basket_affinity_map.png",
        alt: "Basket affinity map from the Instacart analysis",
      },
      {
        src: "/assets/projects/instacart-intelligence-platform/category_performance.png",
        alt: "Category performance reporting view",
      },
      {
        src: "/assets/projects/instacart-intelligence-platform/customer_segments.png",
        alt: "Customer segment profiles",
      },
    ],
    layout: "visual-left",
    status: "complete",
  },
  {
    id: "product-funnel-analytics",
    title: "Product Funnel Analytics",
    recruiterTitle: "Funnel, attribution, and experiment readouts",
    hook: "Funnel drop-off, channel attribution, and experiment analysis packaged as reporting assets that support product review.",
    problem:
      "Signup-to-activation behavior, channel quality, and experiment outcomes sit in separate event streams; product review needs them structured into one analytical view.",
    data: "Product event data covering acquisition channels, funnel steps, and experiment assignment, prepared through SQL and Python analysis workflows.",
    system:
      "An analysis layer that models funnel stages and channel attribution, plus an experiment readout that summarizes results into a product recommendation card.",
    methods: [
      "Funnel drop-off analysis",
      "Channel attribution",
      "Experiment analysis",
      "Cohort comparison",
    ],
    outputs: [
      "Funnel drop-off reporting view",
      "Channel attribution reporting view",
      "Experiment results readout with recommendation summary",
    ],
    reviewSupport: [
      "Product Review Support: funnel and experiment evidence for product review",
      "Reporting Assets: attribution and drop-off visuals for recurring review",
      "Analytical evidence: recommendation summary derived from experiment output",
    ],
    tools: ["SQL", "Python", "Statistical testing", "BI visuals"],
    skills: ["Product analytics", "Experimentation", "Attribution", "Metric design"],
    metrics: [
      {
        label: "Conversion lift",
        value: "6.92%",
        context: "relative lift, treatment vs. control",
        verified: true,
      },
      {
        label: "Treatment conv.",
        value: "15.88%",
        context: "vs. 14.86% control",
        verified: true,
      },
      {
        label: "p-value",
        value: "0.04391",
        context: "9,996 control / 10,004 treatment users",
        verified: true,
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Kartz82/growth-funnel-intelligence",
        type: "github",
      },
      {
        label: "A/B Experimentation Engine",
        href: "https://github.com/Kartz82/ab-experimentation-engine",
        type: "github",
      },
    ],
    visualType: "dashboard",
    visualAsset: "/assets/projects/product-funnel-analytics/funnel_dropoff.png",
    visualAssets: [
      {
        src: "/assets/projects/product-funnel-analytics/funnel_dropoff.png",
        alt: "Funnel drop-off reporting view",
      },
      {
        src: "/assets/projects/product-funnel-analytics/channel_attribution.png",
        alt: "Channel attribution reporting view",
      },
      {
        src: "/assets/projects/product-funnel-analytics/experiment_results.png",
        alt: "Experiment results readout",
      },
    ],
    layout: "text-left",
    status: "complete",
  },
  {
    id: "customer-rfm-segmentation",
    title: "Customer RFM Segmentation",
    recruiterTitle: "RFM scoring, revenue concentration, and churn-risk views",
    hook: "RFM scoring turned into segment maps, revenue concentration views, and churn-risk analysis that support customer review.",
    problem:
      "Customer bases are not uniform: value concentrates in small groups and churn risk hides in recency patterns. Reviewing that requires modeled segments, not raw transactions.",
    data: "Customer transaction history aggregated into recency, frequency, and monetary features per customer.",
    system:
      "A segmentation workflow that scores customers on RFM dimensions, maps them into named segments, and layers revenue concentration and churn-risk views on top.",
    methods: [
      "RFM feature engineering",
      "Segment scoring and mapping",
      "Revenue concentration analysis",
      "Churn-risk analysis",
    ],
    outputs: [
      "Customer segment map",
      "Revenue concentration view",
      "Churn-risk analysis view",
    ],
    reviewSupport: [
      "Business Review Support: segment and revenue concentration views for customer review",
      "Reporting Assets: churn-risk visuals for retention review",
      "Modeled Metrics: reusable RFM scores per customer",
    ],
    tools: ["SQL", "Python", "Pandas", "BI visuals"],
    skills: ["Segmentation", "Feature engineering", "Applied analysis", "Reporting"],
    metrics: [
      {
        label: "Scoring model",
        value: "RFM",
        context: "recency, frequency, monetary",
        verified: true,
      },
      {
        label: "Customers scored",
        value: "[PLACEHOLDER]",
        context: "add verified count",
        verified: false,
      },
      {
        label: "Segments",
        value: "[PLACEHOLDER]",
        context: "add verified segment count",
        verified: false,
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Kartz82/customer-segmentation-rfm",
        type: "github",
      },
    ],
    visualType: "dashboard",
    visualAsset: "/assets/projects/customer-rfm-segmentation/customer_segment_map.png",
    visualAssets: [
      {
        src: "/assets/projects/customer-rfm-segmentation/customer_segment_map.png",
        alt: "Customer segment map from RFM scoring",
      },
      {
        src: "/assets/projects/customer-rfm-segmentation/revenue_concentration.png",
        alt: "Revenue concentration view",
      },
      {
        src: "/assets/projects/customer-rfm-segmentation/churn_risk_analysis.png",
        alt: "Churn-risk analysis view",
      },
    ],
    layout: "visual-left",
    status: "complete",
  },
  {
    id: "aqi-extreme-value-forecasting",
    title: "AQI Extreme Value Forecasting",
    recruiterTitle: "Ensemble forecasting with EVT tail-risk modeling",
    hook: "Seventeen years of EPA Baltimore air-quality data, an ensemble forecasting model, and extreme value theory for tail-risk analysis.",
    problem:
      "Average air-quality forecasts miss the days that matter most: extreme pollution events sit in the distribution tail, where standard regression underperforms.",
    data: "17 years of EPA air-quality data for Baltimore, with PM2.5 and NO2 emerging as key drivers of AQI behavior.",
    system:
      "A forecasting pipeline that benchmarks a wide model family, ensembles the strongest performers, and adds a Generalized Pareto Distribution layer for extreme-event tail-risk modeling.",
    methods: [
      "Ensemble modeling (XGBoost, Random Forest, and others)",
      "Extreme value theory (Generalized Pareto Distribution)",
      "Model benchmarking (linear, SVR, KNN, Bayesian Ridge, MLP, AdaBoost, robust regressors)",
      "Feature analysis of pollutant drivers",
    ],
    outputs: [
      "Model performance comparison across the benchmarked family",
      "Tail-risk analysis of extreme AQI events",
      "Extreme event timeline views",
    ],
    reviewSupport: [
      "Analytical evidence: quantified tail-risk of extreme pollution events",
      "Reporting Assets: model performance and extreme-event visuals",
      "Business-facing interpretation: what drives extreme AQI days",
    ],
    tools: ["Python", "scikit-learn", "XGBoost", "Statistical modeling"],
    skills: ["Forecasting", "Extreme value theory", "Model evaluation", "Applied data science"],
    metrics: [
      {
        label: "Ensemble RMSE",
        value: "~9.8",
        context: "against observed AQI",
        verified: true,
      },
      {
        label: "Ensemble R²",
        value: "0.84",
        context: "variance explained",
        verified: true,
      },
      {
        label: "History",
        value: "17 yrs",
        context: "EPA Baltimore data",
        verified: true,
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Kartz82/Extreme-Value-AQI-Prediction-for-Baltimore-City",
        type: "github",
      },
    ],
    visualType: "forecasting",
    visualAsset: "/assets/projects/aqi-extreme-value-forecasting/model_performance.png",
    visualAssets: [
      {
        src: "/assets/projects/aqi-extreme-value-forecasting/model_performance.png",
        alt: "Model performance comparison for AQI forecasting",
      },
      {
        src: "/assets/projects/aqi-extreme-value-forecasting/tail_risk.png",
        alt: "Tail-risk analysis of extreme AQI events",
      },
      {
        src: "/assets/projects/aqi-extreme-value-forecasting/extreme_events.png",
        alt: "Extreme AQI event timeline",
      },
    ],
    layout: "text-left",
    status: "complete",
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    id: "retailrocket-recommendation-system",
    title: "RetailRocket Recommendation System",
    bullets: [
      "Modeled 2.7M behavioral interactions across 1.4M users and 235,061 items into a weighted implicit-feedback matrix (view=1, add-to-cart=3, transaction=5)",
      "ALS collaborative filtering (50 factors, 20 iterations, reg. 0.01) with FAISS IndexFlatIP for item-to-item similarity search",
      "Cold-start fallback via global top sellers; sub-10ms top-K inference on CPU-only hardware",
    ],
    badges: ["Python", "ALS", "FAISS", "Implicit feedback"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Kartz82/RecSys",
        type: "github",
      },
    ],
    status: "complete",
  },
  {
    id: "github-engineering-analytics-warehouse",
    title: "GitHub Engineering Analytics Warehouse",
    bullets: [
      "Ingested GitHub REST API data with JSON parsing into a warehouse schema",
      "Modeled engineering analytics around issues, pull requests, velocity, and repository activity",
      "Structured the warehouse for reporting-ready engineering metrics",
    ],
    badges: ["Python ETL", "REST APIs", "Warehouse schema", "SQL"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Kartz82/ETL-Pipeline",
        type: "github",
      },
    ],
    status: "complete",
  },
  {
    id: "fda-inspections-recalls-analytics",
    title: "FDA Adverse Event Analytics",
    bullets: [
      "Integrated 300K+ inspections and 90K+ recalls through FEI-based record linking",
      "Surfaced coverage gaps: ~266,800 inspections with no linked recall and ~9,000 recalls with no linked inspection",
      "Built analysis tables that support regulatory-pattern review",
    ],
    badges: ["SQL", "Data integration", "Record linking", "Analysis tables"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Kartz82/fda-adverse-event-analytics",
        type: "github",
      },
    ],
    status: "complete",
  },
];
