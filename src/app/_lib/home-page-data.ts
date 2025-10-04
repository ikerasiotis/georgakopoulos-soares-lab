export type Accent = "primary" | "secondary" | "accent";

export interface ResearchHighlight {
  title: string;
  description: string;
  accent: Accent;
  href: string;
}

export interface NewsItem {
  date: string;
  title: string;
  description: string;
  href: string;
  accent: Accent;
}

export const RESEARCH_HIGHLIGHTS: ResearchHighlight[] = [
  {
    title: "Novel Mutational Signatures",
    description:
      "Identifying previously unknown mutational signatures in paediatric cancers and uncovering their aetiology.",
    accent: "primary",
    href: "#",
  },
  {
    title: "Genomic Instability Patterns",
    description:
      "Developing methods to quantify genomic instability and link it to treatment response across cancer types.",
    accent: "secondary",
    href: "#",
  },
  {
    title: "Machine Learning Biomarkers",
    description:
      "Building machine learning models that translate mutational signatures into actionable biomarkers.",
    accent: "accent",
    href: "#",
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    date: "June 15, 2023",
    title: "New Publication in Nature Genetics",
    description:
      "Our latest research on mutational signatures in paediatric cancers reveals patterns with implications for early detection and treatment.",
    href: "#",
    accent: "primary",
  },
  {
    date: "May 28, 2023",
    title: "Lab Welcomes New Postdoctoral Researcher",
    description:
      "We are delighted to welcome Dr. Emma Thompson, who will lead our translational genomics initiatives.",
    href: "#",
    accent: "secondary",
  },
];
