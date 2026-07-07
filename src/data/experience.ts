import type { ExperienceItem } from "../types/portfolio";

export const experience: ExperienceItem[] = [
  {
    id: "umbc-ms-data-science",
    kind: "education",
    title: "M.S. Data Science",
    organization: "University of Maryland Baltimore County",
    location: "USA",
    startDate: "Aug 27, 2024",
    endDate: "May 20, 2026",
    description: [
      "Carnegie R1 Research University | GPA: 3.78 / 4.0",
      "Focus: Machine Learning, Statistical Modeling, Experimental Design, Time Series Analysis",
    ],
    verified: true,
  },
  {
    id: "umbc-graduate-assistant-aqi-forecasting",
    kind: "experience",
    title: "Graduate Assistant — Extreme Value AQI Forecasting",
    organization: "University of Maryland Baltimore County",
    startDate: "Aug 2024",
    endDate: "May 2026",
    description: [
      "Applied forecasting research on 17 years of EPA Baltimore air-quality data, focusing on extreme AQI events, pollutant drivers, and tail-risk modeling.",
    ],
    bullets: [
      "Built ML and EVT workflows for hazardous AQI spike analysis.",
      "Analyzed PM2.5, NO2, seasonality, and model performance patterns.",
    ],
    verified: true,
  },
];
