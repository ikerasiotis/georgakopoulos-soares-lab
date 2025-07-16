import axios from "axios";

type ApiResponse = { data?: { attributes?: GlobalSettings } };

export interface GlobalSettings {
  title: string;
  tagline?: string;
  footerText?: string;
}

export async function getGlobalSettings(): Promise<GlobalSettings> {
  try {
    const res = await axios.get<ApiResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/global-setting`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    );

    if (res.data.data?.attributes && res.data.data.attributes.title) {
      return res.data.data.attributes;
    }

    return {
      title: "Georgakopoulos-Soares Lab",
      tagline: "Decoding Cancer Genomics through Computational Biology",
      footerText: "© All rights reserved.",
    };
  } catch (err) {
    console.error("Error fetching global settings:", err);
    return {
      title: "Georgakopoulos-Soares Lab",
      tagline: "Decoding Cancer Genomics through Computational Biology",
      footerText: "© All rights reserved.",
    };
  }
}
