/**
 * Grounding document for the portfolio assistant.
 * Every fact here is verified; the model is instructed to use nothing else.
 */
export const KNOWLEDGE = `
# Kartikeya Vemula — Portfolio Knowledge Base

## Identity and positioning
- Name: Kartikeya Vemula. Data and analytics professional pursuing an M.S. in Data Science at UMBC.
- Core identity: analytics systems that connect data engineering, BI reporting, and applied analysis.
- Primary positioning: Analytics Engineer FIRST, supported by Data Analyst, Product Analyst, and Data Scientist capabilities.
- Approximate role emphasis: 60% analytics engineering, 20% data/product analysis, 20% applied data science/forecasting/ML.
- When comparing roles, never weaken one role to strengthen another. Correct framing: "primarily positioned as an Analytics Engineer, while also well versed in data science, product analytics, BI reporting, experimentation, forecasting, and machine learning."
- Never say: "weak in data science", "not a data scientist", "only an analytics engineer", "makes/drives/owns business decisions".
- Prefer: "supports business review", "supports product review", "creates analytical evidence", "creates reporting assets", "business-facing interpretation".

## Recruiter summary
Strongest for Analytics Engineer and analytics-heavy data roles: warehouse-oriented project work, dbt Core modeling, SQL analysis, metric design, Power BI reporting assets, and applied analysis across customer, product, retail, forecasting, and recommendation domains. Also a strong fit for Data Analyst, Product Analyst, and Data Scientist roles where SQL, Python, experimentation, forecasting, customer analytics, and business-facing interpretation matter.
- Clearest primary interview path: Analytics Engineer. Product Analyst, Data Analyst, and Data Scientist interviews also reasonable depending on team needs.
- Level context: graduate student (M.S. in progress, graduates May 2026), portfolio-based evidence plus a Graduate Assistantship. Fits new-grad / early-career analytics roles and internships.

## Location, availability, logistics
- Based in the Baltimore/Maryland area while pursuing the M.S. at UMBC. Graduates May 20, 2026.
- Work authorization: on OPT. For long-term authorization or sponsorship details, recruiters should confirm directly with him.
- Open to full-time roles and apprentice-style opportunities.
- Work preference: preferably onsite.
- Preferred locations: Bengaluru, Mumbai, Chennai, Hyderabad, Pune, Gurgaon, Delhi. Specific relocation logistics should be confirmed directly.
- Salary/compensation: never state a number. Say he is open to market-aligned compensation discussions; final compensation should be discussed directly based on role, location, responsibilities, and company range.

## Contact
- Email: vnskartikeya@gmail.com
- LinkedIn: "Kartikeya Vemula" — https://www.linkedin.com/in/kartikeya-vemula/
- GitHub: "Kartz82" — https://github.com/Kartz82
- Resume PDF: https://kartz82.github.io/resume/Kartikeya_Vemula_Resume.pdf

## Education
- M.S. Data Science, University of Maryland Baltimore County (UMBC), Aug 27, 2024 - May 20, 2026. Carnegie R1 Research University. GPA 3.78/4.0. Focus: Machine Learning, Statistical Modeling, Experimental Design, Time Series Analysis.
- Undergraduate: GITAM Deemed University, Computer Science, GPA 8.89.

## Experience (two verified entries)
1. Graduate Assistant — Extreme Value AQI Forecasting, University of Maryland Baltimore County, Aug 2024 - May 2026.
- Applied forecasting research on 17 years of EPA Baltimore air-quality data: extreme AQI events, pollutant drivers, tail-risk modeling.
- Built ML and EVT workflows for hazardous AQI spike analysis.
- Analyzed PM2.5, NO2, seasonality, and model performance patterns.
- Directly aligned with the AQI Extreme Value Forecasting project.

2. Machine Learning Assistant Intern — NIT Puducherry, Jun 6, 2023 - Jul 21, 2023.
- Fish Detection & Recognition System: deep learning computer vision classifying four fish species (Catla, Grass, Gulfaam, Silver).
- Dataset: 572 images, 143 per class. Keras/TensorFlow transfer learning, image augmentation, notebook-based training (Img_augmentation.ipynb, fdet.ipynb).
- Repo: https://github.com/Kartz82/fish-detection-recognition
- Framing: valid earlier applied ML/computer-vision experience that complements the portfolio; less central because the portfolio emphasizes analytics engineering, BI reporting, product analytics, and applied forecasting. Never frame it as irrelevant or weak.

If asked about prior experience, mention both entries. Refer to the resume for anything further.

## Publications and coding profile
- No publications, papers, or conference talks are currently listed.
- LeetCode: https://leetcode.com/u/Kartikeya036/ — 131-day streak as of July 7, 2026.

## Project ranking and review order
Main five (site order = priority order):
1. Customer Intelligence Warehouse (flagship / strongest; best establishes analytics-engineer-first positioning via dbt Core, data modeling, metric design, BI-ready reporting)
2. Instacart Intelligence Platform
3. Product Funnel Analytics (with A/B Experimentation Engine)
4. Customer RFM Segmentation
5. AQI Extreme Value Forecasting
Supporting three (compact evidence, not full case studies): RetailRocket RecSys, GitHub Engineering Analytics Warehouse / ETL Pipeline, FDA Adverse Event Analytics.

"Second-best project" depends on the audience:
- Retail/customer analytics recruiter: Instacart Intelligence Platform.
- Product analytics recruiter: Product Funnel Analytics / A/B Experimentation Engine.
- Data science or forecasting interviewer: AQI Extreme Value Forecasting.
- Recommendation systems / ML: RetailRocket RecSys (strongest supporting project).
Review-first guidance: start with Customer Intelligence Warehouse, then Instacart or Product Funnel Analytics depending on retail vs product focus.
Never call a project weak; secondary projects exist because the portfolio prioritizes warehouse/BI/analytics-engineering evidence first.

Skill-to-project proof map:
- SQL: Customer Intelligence Warehouse, Instacart. dbt: Customer Intelligence Warehouse. Power BI / reporting: Customer Intelligence Warehouse. Data modeling: Customer Intelligence Warehouse.
- Python: AQI, RecSys, RFM. ML/forecasting: AQI. Experimentation: Product Funnel Analytics. Recommenders: RecSys. Customer analytics: RFM, Instacart.

## Dataset size comparison (for "largest" questions)
- Largest by orders: Instacart — 3,421,083 orders (33,819,106 order items).
- Largest by interactions: RetailRocket RecSys — 2.7M behavioral interactions.
- Customer Intelligence Warehouse — 1,062,984+ transactions.
- Customer RFM Segmentation — 805,549 cleaned transactions.
- FDA — 300K+ inspections, 90K+ recalls.
- AQI — 17 years of EPA Baltimore daily air-quality data.

## Notable verified insights
- RFM: Champions hold 68.12% of historical revenue; 89 high-value at-risk customers.
- A/B test: 6.92% relative conversion lift (15.88% vs 14.86%), p = 0.04391, ~20K users; rollout held due to guardrail risk.
- FDA: ~266,800 inspections with no linked recall; ~9,000 recalls with no linked inspection.
- AQI: PM2.5 and NO2 drive extreme air-quality days; tail-risk quantified with a Generalized Pareto Distribution.
- Instacart: 59.01% reorder rate; largest segment 69,635 moderate-engagement customers; strongest basket-affinity lift 1,431.68 (highest support 1.8930%).

## Main projects

### 1. Customer Intelligence Warehouse (flagship)
- Repo: https://github.com/Kartz82/customer-intelligence-warehouse
- Customer analytics warehouse: PostgreSQL + dbt Core star schema, validated metrics, Power BI reporting.
- 14 dbt models built, 41 dbt tests passed.
- 1,062,984+ transactions, 5,876 customers, 4,000+ products, 43 countries.
- Exports: customer lifetime value (5,047 rows), country revenue (42 rows), monthly sales (25 rows).
- 3 Power BI pages: executive overview, customer value, product return risk.
- Skills: SQL, PostgreSQL, dbt Core, dimensional modeling, metric design, BI-ready marts, testing.

### 2. Instacart Intelligence Platform
- Repo: https://github.com/Kartz82/instacart-intelligence-platform
- SQL-first retail analytics over the public Instacart grocery dataset.
- 3,421,083 orders; 206,209 customers; 49,688 products; 33,819,106 order items; 21 active departments.
- Reorder rate: 59.01%. Largest segment: 69,635 moderate-engagement customers.
- Basket affinity: strongest lift 1,431.68; highest support 1.8930%.
- Outputs: executive overview, customer analytics, product/category, market basket reporting assets.
- Skills: retail analytics, basket analysis, segmentation, SQL/Python, reporting.

### 3. Product Funnel Analytics + A/B Experimentation Engine
- Repos: https://github.com/Kartz82/growth-funnel-intelligence and https://github.com/Kartz82/ab-experimentation-engine
- Funnel measurement, channel attribution, A/B testing with guardrail-aware review.
- A/B result: 6.92% relative lift (15.88% treatment vs 14.86% control), p = 0.04391, 9,996 control / 10,004 treatment users.
- Framing: detected a statistically significant lift while holding rollout due to guardrail risk. The recommendation logic is a project artifact that supports product review.
- Skills: product analytics, funnel analysis, experimentation, statistical interpretation, guardrail metrics.

### 4. Customer RFM Segmentation
- Repo: https://github.com/Kartz82/customer-segmentation-rfm
- RFM (Recency, Frequency, Monetary) scoring into named segments with revenue-concentration and churn-risk views.
- 5,878 customers scored across 805,549 cleaned transactions.
- Champions: 68.12% of historical revenue. 89 high-value at-risk customers. 5 report visuals.
- Segments: Champions, Loyal Customers, New Customers, Potential Loyalists, Cannot Lose Them, At Risk, Hibernating, Lost.
- Skills: customer analytics, segmentation, churn-risk review, Python/SQL, reporting.

### 5. AQI Extreme Value Forecasting
- Repo: https://github.com/Kartz82/Extreme-Value-AQI-Prediction-for-Baltimore-City
- Tied to the UMBC Graduate Assistantship (Aug 2024 - May 2026).
- 17 years of EPA Baltimore data; PM2.5 and NO2 key drivers.
- Ensemble RMSE ~9.8, R-squared ~0.84.
- Extreme value theory: Generalized Pareto Distribution for tail-risk of hazardous AQI spikes.
- Models benchmarked: XGBoost, Random Forest, linear models, SVR, KNN, Bayesian Ridge, MLP, AdaBoost, robust regressors.
- Skills: forecasting, time series, ML, EVT/tail-risk modeling, model evaluation.

## Supporting builds

### RetailRocket Recommendation System (RecSys)
- Repo: https://github.com/Kartz82/RecSys
- Hybrid recommender on the RetailRocket e-commerce dataset.
- 2.7M behavioral interactions; ~1.4M users x 235K items sparse matrix (1,407,580 unique visitors; 235,061 unique items).
- Weighted implicit feedback: view=1, add-to-cart=3, transaction=5.
- ALS collaborative filtering: 50 factors, 20 iterations, regularization 0.01.
- FAISS IndexFlatIP item-to-item similarity; cold-start fallback via global top sellers.
- Sub-10ms typical top-K inference on CPU-only hardware.
- NEVER claim: relevance-improvement percentages, Precision@K, Recall@K, MAP@K, NDCG@K — not verified.

### GitHub Engineering Analytics Warehouse / ETL Pipeline
- Repo: https://github.com/Kartz82/ETL-Pipeline
- Supporting analytics-engineering build: ETL pipeline structure, GitHub REST API ingestion with JSON parsing into a warehouse schema, engineering-activity analytics (issues, pull requests, velocity, repository activity).
- Feeds the analytics-engineering story: structured ingestion and data preparation for downstream reporting.

### FDA Adverse Event Analytics
- Repo: https://github.com/Kartz82/fda-adverse-event-analytics
- Public-data healthcare analytics: 300K+ inspections and 90K+ recalls integrated via FEI-based record linking.
- Coverage gaps surfaced: ~266,800 inspections with no linked recall; ~9,000 recalls with no linked inspection.
- Skills: data cleaning, integration, record linking, regulatory-pattern review.

### KPI / Anomaly Diagnostics (additional supporting repo)
- Repo: https://github.com/Kartz82/kpi-anomaly-diagnostics

## Skills as four connected layers
1. Data Engineering Foundation: Python ETL, PostgreSQL, APIs, JSON/CSV ingestion, data cleaning.
2. Analytics Engineering Layer: SQL, dbt Core, star schemas, data marts, metric definitions, tests.
3. BI & Reporting Layer: Power BI, KPI dashboards, reporting assets, executive summaries.
4. Applied Analysis Layer: product funnels, RFM segmentation, basket analysis, forecasting, experimentation, recommenders.
Top skills: SQL, dbt Core, Power BI, Python. Cloud literacy via Google Cloud certifications; lakehouse awareness via Databricks; warehouse platforms via Snowflake workshop.
Additional tools: Tableau, Microsoft Excel (including XLOOKUP and VLOOKUP), Docker, Keras/TensorFlow (from the NIT internship).
Do NOT claim hands-on R, Airflow, Spark, AWS, or Azure — not verified.

## Certifications (10)
1. Microsoft Certified: Power BI Data Analyst Associate — Microsoft (BI/reporting readiness)
2. Google Cloud Certified: Professional Data Engineer — Google Cloud (cloud data engineering)
3. Google Cloud Certified: Associate Cloud Engineer — Google Cloud (cloud platform)
4. Databricks Fundamentals Accreditation — Databricks Academy (lakehouse)
5. dbt Fundamentals — dbt Labs (analytics engineering)
6. Data Warehousing Workshop — Snowflake (warehouse platform)
7. Google Analytics Certification — Google Skillshop (product/web analytics)
8. Data Analytics Essentials — Cisco Networking Academy (foundations)
9. Advanced SQL — Kaggle (SQL depth)
10. Data Fundamentals — IBM SkillsBuild (data literacy)
No completion dates, credential IDs, or credential URLs are published — do not invent them.

## Critical recruiter answer logic
- Academic or professional? Portfolio is primarily project-based and graduate/research-supported, with an applied Graduate Assistantship (AQI forecasting). Do not present projects as employer-owned production systems.
- Production-grade? Portfolio-grade analytical systems using production-style practices (dbt models, tests, pipelines, structured repos, reporting assets). Do not claim enterprise production deployment.
- Dashboards live? No — local/static reporting assets plus GitHub repositories.
- Metrics verified? Yes, several, from project files: dbt model/test counts, Instacart dataset scale and reorder rate, A/B lift and p-value, RFM outputs, AQI model metrics, RecSys scale/inference. Do not surface unverified numbers.
- What's missing / could improve? Live demos, deployed dashboards, credential links, more professional experience detail. Current portfolio already shows strong project-based evidence across analytics engineering, BI, product analytics, and applied data science.
- New grad differentiator: complete systems (data model -> metrics -> tested layer -> reporting asset) rather than isolated notebooks, plus verified metrics and repos for every claim.

## Answer style
- Concise, recruiter-readable, never defensive, never overclaiming, never undermining secondary roles.
- Unknown personal details (visa, salary, relocation, preferences): direct people to confirm with Kartikeya.
- "Primary positioning" or "portfolio anchor", never "weakness".
`;
