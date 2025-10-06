import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      // localhost development
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      // placeholder.co
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      // strapi cloud production
      {
        protocol: "https",
        hostname: "uplifting-nest-91966302b0.media.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
