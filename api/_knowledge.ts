/**
 * Grounding document for the portfolio assistant.
 * Every fact here is verified; the model is instructed to use nothing else.
 */
export const KNOWLEDGE = `
# Kartikeya Vemula — Portfolio Knowledge Base

## Identity
- Name: Kartikeya Vemula
- Positioning: Analytics engineer-leaning data professional. Structures messy data, models analytical layers, defines metrics, builds reporting assets, connects output to business-facing interpretation.
- Open to roles: Analytics Engineer (primary), Data Analyst, Product Analyst, Data Scientist.
- Location context: M.S. student in USA (UMBC, Maryland).

## Contact
- Email: vnskartikeya@gmail.com
- LinkedIn: "Kartikeya Vemula" — https://www.linkedin.com/in/kartikeya-vemula/
- GitHub: "Kartz82" — https://github.com/Kartz82
- Resume PDF: https://kartz82.github.io/resume/Kartikeya_Vemula_Resume.pdf

## Education
- M.S. Data Science, University of Maryland Baltimore County (UMBC), Aug 2024 - May 2026.
- Carnegie R1 Research University. GPA 3.78/4.0.
- Focus: Machine Learning, Statistical Modeling, Experimental Design, Time Series Analysis.

## Professional experience
- Not listed on the site. Refer people to the resume PDF for work history. Do not invent employers or roles.

## Project ranking (site order = priority order)
1. Customer Intelligence Warehouse (flagship / strongest)
2. Instacart Intelligence Platform (second strongest)
3. Product Funnel Analytics
4. Customer RFM Segmentation
5. AQI Extreme Value Forecasting
Supporting builds: RetailRocket RecSys, GitHub Engineering Analytics Warehouse (ETL Pipeline), FDA Adverse Event Analytics.

## Dataset size comparison (for "largest" questions)
- Largest by orders: Instacart — 3,421,083 orders.
- Largest by interactions: RetailRocket RecSys — 2.7M behavioral interactions.
- Customer Intelligence Warehouse — 1,062,984+ transactions.
- Customer RFM Segmentation — 805,549 cleaned transactions.
- FDA — 300K+ inspections, 90K+ recalls.
- AQI — 17 years of EPA Baltimore daily air-quality data.

## Notable verified insights (for "best insights" questions)
- RFM: Champion customers hold 68.12% of historical revenue; 89 high-value customers flagged at churn risk.
- A/B test: 6.92% relative conversion lift (15.88% treatment vs 14.86% control), p = 0.04391, ~20K users.
- FDA: ~266,800 inspections had no linked recall; ~9,000 recalls had no linked inspection.
- AQI: PM2.5 and NO2 are the key drivers of extreme air-quality days; tail-risk quantified with a Generalized Pareto Distribution.
- Instacart: largest customer segment is 69,635 moderate-engagement customers.

## Main projects

### 1. Customer Intelligence Warehouse (flagship)
- Repo: https://github.com/Kartz82/customer-intelligence-warehouse
- Retail analytics warehouse: PostgreSQL + dbt Core star schema, Power BI reporting.
- 14 dbt models built, 41 dbt tests passed.
- 1,062,984+ transactions, 5,876 customers, 4,000+ products, 43 countries.
- Exports: customer lifetime value (5,047 rows), country revenue (42 rows), monthly sales (25 rows).
- 3 Power BI pages: executive overview, customer value, product return risk.
- Tools: PostgreSQL, dbt Core, SQL, Power BI.

### 2. Instacart Intelligence Platform
- Repo: https://github.com/Kartz82/instacart-intelligence-platform
- SQL-first analysis of the public Instacart grocery dataset.
- 3,421,083 orders, 206,209 customers, 49,688 products.
- Outputs: basket affinity map, category performance view, customer segment profiles.
- Largest segment: 69,635 moderate-engagement customers.
- Tools: SQL, Python, Pandas, BI visuals.

### 3. Product Funnel Analytics
- Repos: https://github.com/Kartz82/growth-funnel-intelligence and https://github.com/Kartz82/ab-experimentation-engine
- Funnel drop-off, channel attribution, and an A/B experiment readout.
- A/B result: 6.92% relative lift, 15.88% vs 14.86% conversion, p = 0.04391, 9,996 control / 10,004 treatment users.
- Tools: SQL, Python, statistical testing, BI visuals.

### 4. Customer RFM Segmentation
- Repo: https://github.com/Kartz82/customer-segmentation-rfm
- RFM scoring, segment maps, revenue concentration, churn-risk views.
- 5,878 customers scored across 805,549 transactions.
- Champions: 68.12% of historical revenue. 89 high-value customers at churn risk.
- Tools: SQL, Python, Pandas, BI visuals.

### 5. AQI Extreme Value Forecasting
- Repo: https://github.com/Kartz82/Extreme-Value-AQI-Prediction-for-Baltimore-City
- 17 years of EPA Baltimore data; ensemble forecasting + extreme value theory.
- Ensemble RMSE ~9.8, R-squared 0.84. PM2.5 and NO2 key drivers.
- Generalized Pareto Distribution for tail-risk of extreme pollution events.
- Models benchmarked: XGBoost, Random Forest, linear models, SVR, KNN, Bayesian Ridge, MLP, AdaBoost, robust regressors.
- Tools: Python, scikit-learn, XGBoost, statistical modeling.

## Supporting builds

### RetailRocket Recommendation System (RecSys)
- Repo: https://github.com/Kartz82/RecSys
- 2.7M interactions, 1,407,580 unique visitors, 235,061 unique items.
- Weighted implicit feedback: view=1, add-to-cart=3, transaction=5.
- ALS collaborative filtering: 50 factors, 20 iterations, regularization 0.01.
- FAISS IndexFlatIP item-to-item similarity; cold-start fallback via global top sellers.
- Sub-10ms typical top-K inference on CPU-only hardware.

### GitHub Engineering Analytics Warehouse
- Repo: https://github.com/Kartz82/ETL-Pipeline
- GitHub REST API ingestion, JSON parsing, warehouse schema.
- Engineering analytics: issues, pull requests, velocity, repository activity.

### FDA Adverse Event Analytics
- Repo: https://github.com/Kartz82/fda-adverse-event-analytics
- 300K+ inspections and 90K+ recalls integrated via FEI-based record linking.
- ~266,800 inspections with no linked recall; ~9,000 recalls with no linked inspection.

### KPI / Anomaly Diagnostics (supporting)
- Repo: https://github.com/Kartz82/kpi-anomaly-diagnostics

## Skills (four layers)
1. Data Engineering Foundation: Python ETL, PostgreSQL, APIs, JSON/CSV ingestion, data cleaning.
2. Analytics Engineering Layer: SQL, dbt Core, star schemas, data marts, metric definitions, tests.
3. BI & Reporting Layer: Power BI, KPI dashboards, reporting assets, executive summaries.
4. Applied Analysis Layer: product funnels, RFM segmentation, basket analysis, forecasting, experimentation, recommenders.
Top skills: SQL, dbt Core, Power BI, Python.

## Certifications (10)
1. Microsoft Certified: Power BI Data Analyst Associate — Microsoft
2. Google Cloud Certified: Professional Data Engineer — Google Cloud
3. Google Cloud Certified: Associate Cloud Engineer — Google Cloud
4. Databricks Fundamentals Accreditation — Databricks Academy
5. dbt Fundamentals — dbt Labs
6. Data Warehousing Workshop — Snowflake
7. Google Analytics Certification — Google Skillshop
8. Data Analytics Essentials — Cisco Networking Academy
9. Advanced SQL — Kaggle
10. Data Fundamentals — IBM SkillsBuild
`;
