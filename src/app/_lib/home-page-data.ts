export type Accent = "primary" | "secondary" | "accent";

export interface ResearchHighlight {
  title: string;
  description: string;
  accent: Accent;
  href: string;
}

export interface FeaturedPublication {
  title: string;
  venue: string;
  authors: string;
  links: Array<{ label: string; href: string; type: "pdf" | "external" }>;
}

export interface TeamMemberPreview {
  name: string;
  role: string;
  bio: string;
  accent: Accent;
  socials: Array<{ icon: "twitter" | "linkedin"; href: string }>;
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

export const FEATURED_PUBLICATIONS: FeaturedPublication[] = [
  {
    title:
      "Novel Mutational Signatures in Pediatric Cancers Reveal Distinct Etiological Processes",
    venue: "Nature Genetics (2023)",
    authors:
      "Georgakopoulos-Soares I, Chen S, Thompson E, Rodriguez M, Kim O, Patel A, Nguyen D",
    links: [
      { label: "PDF", href: "#", type: "pdf" },
      { label: "DOI", href: "#", type: "external" },
    ],
  },
  {
    title:
      "Computational Framework for Integrative Analysis of Mutational Signatures and Clinical Data",
    venue: "Genome Biology (2022)",
    authors: "Rodriguez M, Georgakopoulos-Soares I, Nguyen D, Chen S, Thompson E",
    links: [
      { label: "PDF", href: "#", type: "pdf" },
      { label: "DOI", href: "#", type: "external" },
    ],
  },
  {
    title:
      "Genomic Instability Patterns Predict Response to Immunotherapy in Advanced Lung Cancer",
    venue: "Cancer Cell (2022)",
    authors: "Thompson E, Georgakopoulos-Soares I, Chen S, Rodriguez M, Kim O",
    links: [
      { label: "PDF", href: "#", type: "pdf" },
      { label: "DOI", href: "#", type: "external" },
    ],
  },
];

export const TEAM_LEAD = {
  name: "Dr. Ilias Georgakopoulos-Soares",
  role: "Principal Investigator",
  summary: [
    "Dr. Georgakopoulos-Soares leads the lab's research on cancer genomics and computational biology, bringing expertise across computer science and molecular biology.",
    "His work focuses on developing computational methods to understand mutational processes and their therapeutic implications.",
  ],
  socials: [
    { icon: "twitter", href: "#" },
    { icon: "linkedin", href: "#" },
    { icon: "google", href: "#" },
    { icon: "github", href: "#" },
  ],
};

export const TEAM_PREVIEW: TeamMemberPreview[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Postdoctoral Researcher",
    bio: "Specialises in mutational signature analysis and machine learning applications in cancer genomics.",
    accent: "secondary",
    socials: [
      { icon: "twitter", href: "#" },
      { icon: "linkedin", href: "#" },
    ],
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Postdoctoral Researcher",
    bio: "Focuses on genomic instability mechanisms and treatment resistance in solid tumours.",
    accent: "primary",
    socials: [
      { icon: "twitter", href: "#" },
      { icon: "linkedin", href: "#" },
    ],
  },
  {
    name: "Dr. Emma Thompson",
    role: "Translational Scientist",
    bio: "Leads biomarker discovery efforts for early cancer detection and patient stratification.",
    accent: "accent",
    socials: [
      { icon: "linkedin", href: "#" },
    ],
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
