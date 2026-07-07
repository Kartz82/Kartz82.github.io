import type { ExperienceItem } from "../types/portfolio";

export const experience: ExperienceItem[] = [
  {
    id: "umbc-ms-data-science",
    kind: "education",
    title: "M.S. Data Science",
    organization: "University of Maryland Baltimore County",
    location: "USA",
    startDate: "Aug 2024",
    endDate: "May 2026",
    description: [
      "Carnegie R1 Research University | GPA: 3.78 / 4.0",
      "Focus: Machine Learning, Statistical Modeling, Experimental Design, Time Series Analysis",
    ],
    verified: true,
  },
  {
    id: "experience-placeholder",
    kind: "experience",
    title: "[PLACEHOLDER: add verified role title]",
    organization: "[PLACEHOLDER: add verified organization]",
    startDate: "[PLACEHOLDER: add dates]",
    description: [
      "Professional experience entries will be added once verified details are available.",
    ],
    verified: false,
  },
];
