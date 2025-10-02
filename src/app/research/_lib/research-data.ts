export type Accent = "primary" | "secondary" | "accent";

export interface HighlightCard {
  title: string;
  description: string;
  accent: Accent;
}

export interface FocusArea {
  title: string;
  accent: Accent;
  description: string[];
  projects: string[];
  tags: string[];
}

export interface MethodItem {
  title: string;
  description: string;
  accent: Accent;
}

export interface ResourceItem {
  title: string;
  description: string;
  accent: Accent;
  links: Array<{ label: string; href?: string }>;
}

export interface ResearchContent {
  heroTitle: string;
  heroSubtitle: string;
  approachParagraphs: string[];
  approachHighlights: HighlightCard[];
  focusAreas: FocusArea[];
  methods: MethodItem[];
  resources: ResourceItem[];
}

export const APPROACH_PARAGRAPHS: string[] = [
  "The Georgakopoulos-Soares Lab combines computational biology, genomics, and machine learning to understand the complex patterns of mutations that drive cancer development and progression.",
  "We develop innovative computational methods to analyze large-scale genomic datasets, with the goal of identifying new biomarkers, therapeutic targets, and insights into cancer biology.",
  "Our interdisciplinary approach brings together expertise from computer science, statistics, molecular biology, and clinical oncology to address key challenges in cancer research.",
];

export const APPROACH_HIGHLIGHTS: HighlightCard[] = [
  {
    title: "Genomic Analysis",
    description: "Analyzing cancer genomes to identify mutational patterns and signatures.",
    accent: "primary",
  },
  {
    title: "Machine Learning",
    description: "Developing algorithms that surface actionable insights from complex data.",
    accent: "secondary",
  },
  {
    title: "Translational Research",
    description: "Bridging basic science discoveries with clinical applications.",
    accent: "accent",
  },
  {
    title: "Tool Development",
    description: "Creating open resources for the scientific and medical community.",
    accent: "primary",
  },
];

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: "Mutational Signatures in Cancer",
    accent: "primary",
    description: [
      "Our lab is at the forefront of identifying and characterizing mutational signatures in cancer genomes. These signatures reveal the biological processes operating during tumor development.",
      "By analyzing large-scale genomic datasets we discover new signatures and explore their biological origins with implications for etiology, detection, and treatment.",
    ],
    projects: [
      "Identification of novel mutational signatures in pediatric cancers",
      "Computational methods for signature extraction from whole-genome sequencing",
      "Linking mutational signatures to clinical outcomes",
      "Characterization of tissue-specific mutational processes",
    ],
    tags: ["Genomic Analysis", "Pattern Recognition", "Cancer Etiology"],
  },
  {
    title: "Genomic Instability and Cancer Evolution",
    accent: "secondary",
    description: [
      "Genomic instability drives tumor evolution and treatment resistance. We interrogate its mechanisms and consequences across cancer types.",
      "Our computational methods quantify chromosomal instability, microsatellite instability, and replication stress to uncover therapeutic vulnerabilities.",
    ],
    projects: [
      "Cataloguing genomic instability patterns across tumors",
      "Relating genomic instability to immunotherapy response",
      "Tracking tumor evolution via instability markers",
      "Identifying synthetic lethal partners of instability pathways",
    ],
    tags: ["Tumor Evolution", "Genomic Instability", "Treatment Resistance"],
  },
  {
    title: "Computational Methods for Cancer Genomics",
    accent: "accent",
    description: [
      "We build computational and machine learning frameworks tailored to the complexity of cancer genomes.",
      "Our tools integrate heterogeneous data, identify driver mutations, and deliver accessible software for the community.",
    ],
    projects: [
      "Multi-omics integration with machine learning",
      "Frameworks for mutational signature analysis",
      "Algorithms for discovering cancer driver mutations",
      "Deep learning models for cancer classification and prognosis",
    ],
    tags: ["Machine Learning", "Algorithm Development", "Data Integration"],
  },
  {
    title: "Translational Cancer Genomics",
    accent: "primary",
    description: [
      "We translate genomic discoveries into clinical impact through biomarker development and validation.",
      "Collaboration with clinical partners ensures our findings inform diagnosis, prognosis, and therapy selection.",
    ],
    projects: [
      "Biomarkers for early cancer detection",
      "Predictive markers for immunotherapy response",
      "Prognostic models based on mutational signatures",
      "ctDNA monitoring for treatment response",
    ],
    tags: ["Biomarker Discovery", "Precision Medicine", "Clinical Translation"],
  },
];

export const METHOD_ITEMS: MethodItem[] = [
  {
    title: "Computational Genomics",
    description:
      "Advanced pipelines for whole-genome, whole-exome, and transcriptomic data analysis.",
    accent: "primary",
  },
  {
    title: "Machine Learning",
    description:
      "Supervised, unsupervised, and deep learning models tailored to genomic signals.",
    accent: "secondary",
  },
  {
    title: "Data Integration",
    description:
      "Combining genomic, epigenomic, transcriptomic, and clinical data for holistic insights.",
    accent: "accent",
  },
  {
    title: "Statistical Modeling",
    description:
      "Robust statistical frameworks for mutational processes and clinical associations.",
    accent: "primary",
  },
];

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    title: "SignatureExplorer",
    description:
      "A comprehensive suite for extracting and interpreting mutational signatures.",
    accent: "primary",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    title: "GenomeInstability",
    description:
      "Toolkit for quantifying genomic instability across patient cohorts.",
    accent: "secondary",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Documentation", href: "#" },
    ],
  },
  {
    title: "MultiOmicsIntegrator",
    description:
      "Framework for harmonizing multi-omics data and generating integrative models.",
    accent: "accent",
    links: [{ label: "GitHub", href: "#" }],
  },
];

export const FALLBACK_RESEARCH_CONTENT: ResearchContent = {
  heroTitle: "Research Areas",
  heroSubtitle:
    "Exploring the genomic landscape of cancer through computational approaches",
  approachParagraphs: APPROACH_PARAGRAPHS,
  approachHighlights: APPROACH_HIGHLIGHTS,
  focusAreas: FOCUS_AREAS,
  methods: METHOD_ITEMS,
  resources: RESOURCE_ITEMS,
};
