import Link from "next/link";

import type { HomepageResearchHighlight } from "@/libs/api";

const accentStyles: Record<string, string> = {
  primary: "text-primary bg-primary/10",
  secondary: "text-secondary bg-secondary/10",
  accent: "text-accent bg-accent/10",
};

function HighlightIcon({ accent }: { accent: string }) {
  const classes = accentStyles[accent] ?? accentStyles.primary;
  return (
    <div
      className={`w-16 h-16 ${classes} rounded-full flex items-center justify-center mb-4`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    </div>
  );
}

export function ResearchHighlights({
  highlights,
}: {
  highlights: HomepageResearchHighlight[];
}) {
  return (
    <section className="py-16 bg-light research-bg" aria-labelledby="research-highlights">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            id="research-highlights"
            className="text-3xl font-bold mb-4 text-center"
          >
            Research Highlights
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="bg-white p-6 rounded-lg shadow-md hover-scale focus-within:ring-2 focus-within:ring-primary"
              >
                <HighlightIcon accent={highlight.accent} />
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 mb-4">{highlight.description}</p>
                <Link
                  href={highlight.href}
                  className="inline-flex items-center text-primary hover:text-secondary font-medium"
                >
                  Learn more
                  <span aria-hidden className="ml-1">
                    ↗
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
