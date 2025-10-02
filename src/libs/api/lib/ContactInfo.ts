import axios from "axios";

type StrapiContactInfo = Partial<ContactInfo> & {
  id?: number;
  documentId?: string;
};

type StrapiDataEnvelope<T extends object> =
  | (T & { id?: number; documentId?: string })
  | {
      id?: number;
      documentId?: string;
      attributes?: T | null;
    };

type StrapiResponse<T extends object> = {
  data?: StrapiDataEnvelope<T> | null;
  meta?: unknown;
};

export interface ContactInfo {
  heroTitle: string;
  heroSubtitle?: string | null;
  department: string;
  institution: string;
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  email: string;
  labPhone?: string | null;
  officePhone?: string | null;
  officeHoursWeekdays?: string | null;
  officeHoursWeekend?: string | null;
  twitterUrl?: string | null;
  linkedinUrl?: string | null;
  githubUrl?: string | null;
  googleScholarUrl?: string | null;
  pubmedUrl?: string | null;
  mapEmbedUrl?: string | null;
  mapLinkUrl?: string | null;
}

const fallbackContactInfo: ContactInfo = {
  heroTitle: "Contact Us",
  heroSubtitle: "College of Pharmacy, Division of Pharmacology & Toxicology",
  department: "College of Pharmacy, Division of Pharmacology & Toxicology",
  institution: "University of Texas at Austin",
  addressLine: "Dell Pediatric Research Institute",
  city: "Austin",
  state: "TX",
  postalCode: "78723",
  email: "ilias@psu.edu",
  labPhone: "(814) 865-XXXX",
  officePhone: "(814) 865-XXXX",
  officeHoursWeekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
  officeHoursWeekend: "Saturday - Sunday: Closed",
  linkedinUrl: "https://www.linkedin.com/in/ilias-georgakopoulos-soares/",
  githubUrl: "https://github.com/ilias-georgakop",
  googleScholarUrl:
    "https://scholar.google.com/citations?user=BDaUtCwAAAAJ&hl=el&oi=sra",
  pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/?term=Georgakopoulos-Soares",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Dell%20Pediatric%20Research%20Institute%201400%20Barbara%20Jordan%20Blvd%20Austin%20TX%2078723&output=embed",
  mapLinkUrl: "https://maps.app.goo.gl/nuZwmwKC2mZcXRwJ6",
};

function extractAttributes(
  data?: StrapiDataEnvelope<StrapiContactInfo> | null
): StrapiContactInfo | undefined {
  if (!data) {
    return undefined;
  }

  if ("attributes" in data) {
    return data.attributes ?? undefined;
  }

  return data as StrapiContactInfo;
}

export async function getContactInfo(): Promise<ContactInfo> {
  try {
    const res = await axios.get<StrapiResponse<StrapiContactInfo>>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/contact-info`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    const attributes = extractAttributes(res.data?.data);

    if (attributes && Object.keys(attributes).length > 0) {
      const filteredEntries = Object.entries(attributes).filter(
        ([, value]) => value !== undefined && value !== null && value !== ""
      );

      return {
        ...fallbackContactInfo,
        ...Object.fromEntries(filteredEntries),
      } as ContactInfo;
    }
  } catch (err) {
    console.error("Error fetching contact info:", err);
  }

  return fallbackContactInfo;
}
