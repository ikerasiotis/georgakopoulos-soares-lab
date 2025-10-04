import type { Metadata } from "next";

import { ToolCard } from "./_components/ToolCard";
import { getTools, getToolsPageContent } from "@/libs/api";

export const metadata: Metadata = {
  title: "Research Tools | Georgakopoulos-Soares Lab",
  description:
    "Discover open-source tools, algorithms, and software developed by the Georgakopoulos-Soares Lab to accelerate genomic and computational biology research.",
  openGraph: {
    title: "Research Tools | Georgakopoulos-Soares Lab",
    description:
      "Browse our suite of lab-built software that powers genomic discovery, motif detection, k-mer analysis, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Tools | Georgakopoulos-Soares Lab",
    description:
      "Explore software and algorithms created by the Georgakopoulos-Soares Lab for genomics and computational biology.",
  },
  alternates: {
    canonical: "/tools",
  },
};

export default async function ToolsPage() {
  const [pageContent, tools] = await Promise.all([
    getToolsPageContent(),
    getTools(),
  ]);

  return (
    <main id="tools" className="bg-light">
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              {pageContent.heroEyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              {pageContent.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              {pageContent.heroDescription}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="tools-heading" className="py-16">
        <div className="container mx-auto px-4 py-4">
          <div className="mx-auto flex max-w-6xl flex-col gap-10">
            <header className="flex flex-col gap-4 text-center lg:text-left">
              <div>
                <h2
                  id="tools-heading"
                  className="text-3xl font-semibold text-slate-900"
                >
                  {pageContent.featuredTitle}
                </h2>
                <p className="mt-2 text-base text-slate-600">
                  {pageContent.featuredDescription}
                </p>
              </div>
            </header>

            <div className="grid gap-8 lg:grid-cols-2">
              {tools.map((tool, index) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  position={index + 1}
                  labels={{
                    keywords: pageContent.keywordsLabel,
                    highlights: pageContent.highlightsLabel,
                    features: pageContent.featuresLabel,
                    link: pageContent.linkLabel,
                    linkFallback: pageContent.linkFallbackLabel,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
