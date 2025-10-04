import axios from "axios";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ImageVariantSet {
  url: string | null;
  thumbnail: string | null;
  small: string | null;
  medium: string | null;
  large: string | null;
  alt: string | null;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  affiliation: string;
  email?: string | null;
  bio?: string | null;
  photoUrl?: string | null;
  portrait?: ImageVariantSet;
  linkedin?: string | null;
  github?: string | null;
  googleScholar?: string | null;
}

export interface PrincipalInvestigator {
  name: string;
  title: string;
  summary: string[];
  education: string[];
  photoUrl?: string | null;
  socialLinks: {
    label: string;
    href: string;
    icon: IconProp;
  }[];
  portrait?: ImageVariantSet;
}

export interface TeamPageContent {
  heroTitle: string;
  heroSubtitle: string;
  principalInvestigator: PrincipalInvestigator;
  members: TeamMember[];
}

type StrapiComponent<T> = T & { id?: number };

type StrapiSocialLink = StrapiComponent<{
  label?: string | null;
  url?: string | null;
  iconKey?: string | null;
}>;

type StrapiImageFormat = {
  url?: string | null;
};

type StrapiImage = {
  data?: {
    id?: number;
    attributes?: {
      url?: string | null;
      alternativeText?: string | null;
      formats?: {
        thumbnail?: StrapiImageFormat | null;
        small?: StrapiImageFormat | null;
        medium?: StrapiImageFormat | null;
        large?: StrapiImageFormat | null;
      } | null;
    } | null;
  } | null;
};

type StrapiEducationItem = StrapiComponent<{
  label?: string | null;
}>;

type StrapiMember = StrapiComponent<{
  name?: string | null;
  role?: string | null;
  focus?: string | null;
  affiliation?: string | null;
  email?: string | null;
  bio?: string | null;
  portrait?: StrapiImage | null;
  linkedin?: string | null;
  github?: string | null;
  googleScholar?: string | null;
}>;

type StrapiTeamAttributes = {
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  principalInvestigatorName?: string | null;
  principalInvestigatorTitle?: string | null;
  principalInvestigatorSummary?: string | null;
  principalInvestigatorEducation?: StrapiEducationItem[] | null;
  principalInvestigatorSocialLinks?: StrapiSocialLink[] | null;
  principalInvestigatorPortrait?: StrapiImage | null;
  members?: StrapiMember[] | null;
};

type StrapiDataEnvelope<T extends object> =
  | (T & {
      id?: number;
      documentId?: string;
    })
  | {
      id?: number;
      documentId?: string;
      attributes?: T | null;
    };

type StrapiResponse<T extends object> = {
  data?: StrapiDataEnvelope<T> | null;
  meta?: unknown;
};

const iconMap: Record<string, IconProp> = {
  twitter: ["fab", "twitter"],
  linkedin: ["fab", "linkedin"],
  scholar: ["fas", "graduation-cap"],
  github: ["fab", "github"],
  link: ["fas", "link"],
};

const FALLBACK_PI_PORTRAIT: ImageVariantSet = {
  url: "/images/ilias.jpg",
  thumbnail: "/images/ilias.jpg",
  small: "/images/ilias.jpg",
  medium: "/images/ilias.jpg",
  large: "/images/ilias.jpg",
  alt: "Portrait of Dr. Ilias Georgakopoulos-Soares",
};

const fallbackTeamMembers: TeamMember[] = [
  {
    name: "Ioannis Mouratidis",
    role: "Research Scientist",
    focus: "Computational biology",
    affiliation: "Austin Texas University",
    bio: "Ioannis Mouratidis is a Research Software Engineer specializing in machine learning and algorithmic optimization, with over five years of experience applying these methods to bioinformatics and computational biology. He holds a bachelor's degree in Mathematics and a master's in Artificial Intelligence from KU Leuven University. Ioannis is particularly interested in developing scalable and efficient artificial intelligence models that bridge the gap between raw data and actionable insights in life sciences. Outside of work, he enjoys running, reading, and discovering new places through travel.",
    email: "kerasiotisioannis@gmail.com",
    photoUrl: "/images/ioannis.jpg",
    portrait: undefined,
  },
  {
    name: "Nikol Chantzi",
    role: "Research Scientist",
    focus: "",
    affiliation: "Austin Texas University",
    bio: "I am a mathematician and software engineer. My main research interests lie within probability theory, artificial intelligence, algorithms and computation. When I don’t code I enjoy reading fantasy novels, philosophy books, & working out. I also, love playing RPG board games via which I experience new worlds that spark my imagination to see beyond what’s visible.",
    email: null,
    photoUrl: "/images/nikol.jpg",
    portrait: undefined,
    linkedin: "https://www.linkedin.com/in/nikol-chantzi-438b62201/",
    github: "https://github.com/NicoleChant",
  },
  {
    name: "Candace Chan",
    role: "PhD Student",
    focus: "Computational biology",
    affiliation: "Austin Texas University",
    bio: "Candace is a computational biologist dedicated to developing advanced tools for disease detection and untangling the complexities of gene regulation. She earned her PhD from the University of California, San Francisco, and bachelor's degree in Molecular and Cell Biology from the University of California, Berkeley.",
    email: null,
    photoUrl: "/images/candance.jpg",
    portrait: undefined,
  },
  {
    name: "Aksatha Nayak",
    role: "PhD Student",
    focus: "Bioinformatics, Cancer Genomics",
    affiliation: "Austin Texas University",
    bio: "I am a PhD student specializing in bioinformatics, with a focus on cancer genomics. I hold a bachelor's degree in Computer Science and Engineering from India and began my career as a software developer before transitioning into bioinformatics. Prior to starting my PhD, I worked as a Bioinformatician at EMBL-EBI, where I explored my interest in genomic data analysis. Outside of research, I enjoy reading thrillers, hiking and traveling.",
    email: null,
    photoUrl: "/images/akshatha.jpg",
    portrait: undefined,
  },
  {
    name: "Aris Karatikos",
    role: "Software and Machine Learning Engineer",
    focus: "Software Engineering, Artificial Intelligence, Bioinformatics",
    affiliation: "Austin Texas University",
    bio: "Aris Karatzikos is a Software and Machine Learning Engineer with experience in Software Engineering and Artificial Intelligence, specializing in large-scale data systems, bioinformatics, and domain-specific applications in both scientific and industrial contexts. He holds a Master’s degree in Electrical and Computer Engineering and will begin a Ph.D. in Computer Science at the University of Texas at Austin in the fall.",
    email: null,
    photoUrl: "/images/aris.png",
    portrait: undefined,
  },
  {
    name: "Eleftherios Bochalis",
    role: "PhD Student",
    focus: "Bioinformatics, Cancer Genomics, Evolutionary Biology, AI",
    affiliation: "Austin Texas University",
    bio: "I am a Bioinformatician, with a Master’s in Pharmacy and a robust background in Biology and Computer Science. Currently, I am a PhD student studying Bioinformatics. My main research interests focus on cancer genomics with an emphasis on mutational analysis, evolutionary biology centered around protein evolution, and artificial intelligence. Outside the lab, I play basketball, exercise and listen to music.",
    email: null,
    photoUrl: "/images/lefteris.jpg",
    portrait: undefined,
    linkedin: "https://www.linkedin.com/in/eleftherios-bochalis/",
    github: "https://github.com/mpo05",
  },
  {
    name: "Georgios Megalovasilis",
    role: "Research Scientist",
    focus: "Bioinformatics, Biomedical Analysis",
    affiliation: "Austin Texas University",
    bio: "I have a background in biology, with hands-on experience in both laboratory and clinical settings. Over time, I became increasingly interested in working with data, which led me to focus on bioinformatics and biomedical analysis during my master’s studies. Now, I enjoy learning new ways to combine biology and programming, and I find the challenges of data-driven research very rewarding. Outside of work, I like reading, hiking, and staying active. Education: Biology BSc, University of Patras. Molecular Medicine MSc, Charité Medical University of Berlin.",
    email: null,
    photoUrl: "/images/vasilios.jpg",
    portrait: undefined,
  },
  {
    name: "Zhe Liu (Ashley)",
    role: "PhD",
    focus: "Computational Biology, Bioinformatics",
    affiliation: "Austin Texas University",
    bio: "My name is Zhe LIU (Ashley). I obtained my Ph.D. from the Department of Computer Science at City University of Hong Kong, under the supervision of Prof. Ka-Chun WONG. My research primarily focuses on computational biology and bioinformatics, with particular interests in transcriptional regulation, single-cell transcriptomics, and the development of computational tools for integrative multi-omics analysis. I am passionate about applying machine learning and data-driven approaches to better understand complex biological systems and human diseases.",
    email: null,
    photoUrl: "/images/zhe.jpg",
    portrait: undefined,
  },
  {
    name: "Antonis Papageorgiou",
    role: "Bioinformatician",
    focus: "Data Science, Artificial Intelligence, Bioinformatics",
    affiliation: "Austin Texas University",
    bio: "Antonis Papageorgiou is a Bioinformatician with a background in Electrical Engineering and Computer Technology. He is passionate about Data Science, AI and Bioinformatics and has strong programming skills. At the moment he is doing his Masters Degree in the field of Bioinformatics and Computational Biology. In his free time, he enjoys traveling and staying active through basketball, tennis and skiing.",
    email: null,
    photoUrl: "/images/antonis.jpeg",
    portrait: undefined,
  },
  {
    name: "Haris Kilakos",
    role: "PhD Student",
    focus: "Artificial Intelligence, Software Engineering, Bioinformatics",
    affiliation: "Austin Texas University",
    bio: "I’m a PhD student in Computer Science at the University of Texas at Austin, specializing in artificial intelligence, software engineering and bioinformatics. My research focuses on developing machine learning methods to tackle complex problems in computational biology, with the goal of deepening our biological understanding. I’m passionate about interdisciplinary collaboration and aim to explore how AI can contribute to meaningful advances in the life sciences.",
    email: null,
    photoUrl: "/images/haris.jpg",
    portrait: undefined,
  },
  {
    name: "Michail Patsakis",
    role: "Electrical and Computer Engineer",
    focus: "Algorithm Design, Complexity Theory, Software Architecture",
    affiliation: "Austin Texas University",
    bio: "Michail Patsakis is an Electrical and Computer Engineer with a robust background in theoretical computer science and software engineering, having previously contributed his expertise at IBM’s Data & AI department. His research interests span a wide spectrum, encompassing algorithm design, complexity theory and software architecture. In his free time, he enjoys playing blitz chess, classical piano and tennis.",
    email: null,
    photoUrl: "/images/patsakis.png",
    portrait: undefined,
    github: "https://github.com/michalispatsakis",
  },
  {
    name: "Kimonas Provatas",
    role: "Electrical and Computer Engineer",
    focus: "Software Engineering, System Design, Cybersecurity",
    affiliation: "Austin Texas University",
    bio: "Kimon is an Electrical and Computer Engineer with a strong inclination towards software engineering, system design and cybersecurity. He has worked at IBM security expert labs and his research interests cover software architecture, algorithms and cybersecurity. In his free time he enjoys running, doing outdoor activities and reading classic literature.",
    email: null,
    photoUrl: "/images/kimonas.jpg",
    portrait: undefined,
    linkedin: "https://www.linkedin.com/in/kimonas-provatas-30905a1a1/",
    github: "https://github.com/xkimopro",
  },
];

const fallbackTeamPage: TeamPageContent = {
  heroTitle: "Our Team",
  heroSubtitle:
    "Meet the researchers driving innovation in cancer genomics and computational biology",
  principalInvestigator: {
    name: "Dr. Ilias Georgakopoulos-Soares",
    title: "Principal Investigator",
    summary: [
      "Dr. Georgakopoulos-Soares is an Assistant Professor at the Department of Biochemistry and Molecular Biology at Penn State University. His research focuses on understanding the mechanisms that shape cancer genomes and their implications for cancer development, progression, and treatment response.",
      "The lab develops computational methods to study mutational processes in cancer and their interactions with the genome and epigenome. Their work aims to improve our understanding of cancer biology and contribute to the development of new diagnostic and therapeutic approaches.",
    ],
    education: [
      "Postdoctoral Fellow, University of California, San Francisco",
      "Ph.D., University of Cambridge",
      "M.Sc., Imperial College London",
    ],
    photoUrl: FALLBACK_PI_PORTRAIT.url,
    socialLinks: [
      {
        label: "Twitter",
        href: "https://twitter.com/IliasGeorgakop1",
        icon: iconMap.twitter,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ilias-georgakopoulos-soares/",
        icon: iconMap.linkedin,
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=Uxu-s_QAAAAJ&hl=en",
        icon: iconMap.scholar,
      },
      {
        label: "GitHub",
        href: "https://github.com/ilias-georgakop",
        icon: iconMap.github,
      },
    ],
    portrait: FALLBACK_PI_PORTRAIT,
  },
  members: fallbackTeamMembers,
};

function toParagraphs(value?: string | null): string[] {
  if (!value) return fallbackTeamPage.principalInvestigator.summary;
  return value
    .split(/\r?\n\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function mapIcon(iconKey?: string | null): IconProp {
  if (!iconKey) {
    return iconMap.link;
  }
  const key = iconKey.toLowerCase();
  return iconMap[key] ?? iconMap.link;
}

function normalizeUrl(path?: string | null): string | null {
  if (!path) {
    return null;
  }

  if (path.startsWith("http")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    return normalizedPath;
  }

  return `${baseUrl}${normalizedPath}`;
}

function resolveMediaUrl(media?: StrapiImage | null): string | null {
  const attributes = media?.data?.attributes;
  if (!attributes) {
    return null;
  }

  return (
    normalizeUrl(attributes.url) ??
    normalizeUrl(attributes.formats?.large?.url) ??
    normalizeUrl(attributes.formats?.medium?.url) ??
    normalizeUrl(attributes.formats?.small?.url) ??
    normalizeUrl(attributes.formats?.thumbnail?.url) ??
    null
  );
}

function buildImageVariants(
  media?:
    | StrapiImage
    | null
    | {
        url?: string | null;
        alternativeText?: string | null;
        formats?: {
          thumbnail?: StrapiImageFormat | null;
          small?: StrapiImageFormat | null;
          medium?: StrapiImageFormat | null;
          large?: StrapiImageFormat | null;
        } | null;
      }
): PrincipalInvestigator["portrait"] | undefined {
  if (!media) {
    return undefined;
  }
  // Check if media has data.attributes (StrapiImage)
  if ("data" in media && media.data?.attributes) {
    const attributes = media.data.attributes;
    return {
      url: normalizeUrl(attributes.url),
      thumbnail: normalizeUrl(attributes.formats?.thumbnail?.url),
      small: normalizeUrl(attributes.formats?.small?.url),
      medium: normalizeUrl(attributes.formats?.medium?.url),
      large: normalizeUrl(attributes.formats?.large?.url),
      alt: attributes.alternativeText ?? null,
    };
  }
  // Otherwise, assume media is raw object with url and formats
  const attributes = media as {
    url?: string | null;
    alternativeText?: string | null;
    formats?: {
      thumbnail?: StrapiImageFormat | null;
      small?: StrapiImageFormat | null;
      medium?: StrapiImageFormat | null;
      large?: StrapiImageFormat | null;
    } | null;
  };
  return {
    url: normalizeUrl(attributes.url),
    thumbnail: normalizeUrl(attributes.formats?.thumbnail?.url),
    small: normalizeUrl(attributes.formats?.small?.url),
    medium: normalizeUrl(attributes.formats?.medium?.url),
    large: normalizeUrl(attributes.formats?.large?.url),
    alt: attributes.alternativeText ?? null,
  };
}

function isValidSocialLink(
  link: StrapiSocialLink | null | undefined
): link is StrapiSocialLink & { label: string; url: string } {
  return Boolean(link?.label && link?.url);
}

function normalizeSocialLinks(
  links?: StrapiSocialLink[] | null
): PrincipalInvestigator["socialLinks"] {
  if (!Array.isArray(links) || links.length === 0) {
    return fallbackTeamPage.principalInvestigator.socialLinks;
  }

  const normalized = links.filter(isValidSocialLink).map((link) => ({
    label: link.label.trim(),
    href: link.url.trim(),
    icon: mapIcon(link.iconKey),
  }));

  return normalized.length > 0
    ? normalized
    : fallbackTeamPage.principalInvestigator.socialLinks;
}

function normalizeEducation(
  education?: StrapiEducationItem[] | null
): string[] {
  if (!Array.isArray(education)) {
    return fallbackTeamPage.principalInvestigator.education;
  }

  const items = education
    .map((item) => item.label?.trim())
    .filter((label): label is string => Boolean(label));

  return items.length > 0
    ? items
    : fallbackTeamPage.principalInvestigator.education;
}

function normalizeMembers(members?: StrapiMember[] | null): TeamMember[] {
  if (!Array.isArray(members) || members.length === 0) {
    return fallbackTeamPage.members;
  }

  const normalized: TeamMember[] = [];

  for (const member of members) {
    const name = member.name?.trim();
    if (!name) {
      continue;
    }

    const portrait = buildImageVariants(member.portrait);
    const portraitUrl =
      portrait?.small ??
      portrait?.thumbnail ??
      portrait?.medium ??
      portrait?.large ??
      portrait?.url ??
      resolveMediaUrl(member.portrait);

    normalized.push({
      name,
      role: member.role?.trim() || "Team Member",
      focus: member.focus?.trim() || "",
      affiliation: member.affiliation?.trim() || "",
      email: member.email?.trim() || null,
      bio: member.bio?.trim() || null,
      photoUrl: portraitUrl ?? null,
      portrait: portrait,
      linkedin: member.linkedin?.trim() || null,
      github: member.github?.trim() || null,
      googleScholar: member.googleScholar?.trim() || null,
    });
  }

  return normalized.length > 0 ? normalized : fallbackTeamPage.members;
}

function extractAttributes<T extends object>(
  data?: StrapiDataEnvelope<T> | null
): T | undefined {
  if (!data) {
    return undefined;
  }

  if ("attributes" in data && data.attributes) {
    return data.attributes;
  }

  const { id, documentId, attributes, ...rest } = data as Partial<
    T & { id?: number; documentId?: string; attributes?: unknown }
  >;

  return rest as T;
}

function normalizeTeamResponse(raw: StrapiTeamAttributes): TeamPageContent {
  const portrait = buildImageVariants(raw.principalInvestigatorPortrait);
  const photoUrl =
    portrait?.medium ||
    portrait?.large ||
    portrait?.small ||
    portrait?.thumbnail ||
    portrait?.url;

  return {
    heroTitle: raw.heroTitle?.trim() || fallbackTeamPage.heroTitle,
    heroSubtitle: raw.heroSubtitle?.trim() || fallbackTeamPage.heroSubtitle,
    principalInvestigator: {
      name:
        raw.principalInvestigatorName?.trim() ||
        fallbackTeamPage.principalInvestigator.name,
      title:
        raw.principalInvestigatorTitle?.trim() ||
        fallbackTeamPage.principalInvestigator.title,
      summary: toParagraphs(raw.principalInvestigatorSummary),
      education: normalizeEducation(raw.principalInvestigatorEducation),
      photoUrl: photoUrl ?? fallbackTeamPage.principalInvestigator.photoUrl,
      socialLinks: normalizeSocialLinks(raw.principalInvestigatorSocialLinks),
      portrait,
    },
    members: normalizeMembers(raw.members),
  };
}

export async function getTeamPageContent(): Promise<TeamPageContent> {
  try {
    const response = await axios.get<StrapiResponse<StrapiTeamAttributes>>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/team-page?populate[principalInvestigatorEducation]=true&populate[principalInvestigatorSocialLinks]=true&populate[principalInvestigatorPortrait]=true&populate[members][populate]=*`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const attributes = extractAttributes(response.data?.data);

    if (!attributes) {
      return fallbackTeamPage;
    }

    // console.log("Raw Team Page Attributes:", normalizeTeamResponse(attributes));

    return normalizeTeamResponse(attributes);
  } catch (error) {
    console.error("Error fetching team page content:", error);
    return fallbackTeamPage;
  }
}
