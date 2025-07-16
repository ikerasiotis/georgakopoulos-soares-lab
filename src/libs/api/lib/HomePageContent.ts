import axios from 'axios';

type ApiResponse = { data?: { attributes?: HomePageContent } };

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface HomePageContent {
  heroTitle: string;
  heroTagline: string;
  aboutText: {
    type: string;
    children: {
      type: string;
      text: string;
    }[];
  }[];
  aboutImage?: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
          thumbnail?: ImageFormat;
          small?: ImageFormat;
          medium?: ImageFormat;
          large?: ImageFormat;
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: unknown;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
}

export async function getHomepageData(): Promise<HomePageContent | undefined> {
  try {
    const res = await axios.get<ApiResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/home-content?populate=*`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    if (res.data.data?.attributes) {
      return res.data.data.attributes;
    }
  } catch (err) {
    console.error('Error fetching global settings:', err);
  }
  return undefined;
}
