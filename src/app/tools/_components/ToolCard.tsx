import type { ToolResource } from "@/libs/api";

interface ToolCardProps {
  tool: ToolResource;
  position: number;
  labels: {
    keywords: string;
    highlights: string;
    features: string;
    link: string;
    linkFallback: string;
  };
}

export function ToolCard({ tool, position, labels }: ToolCardProps) {
  const cardId = `tool-${position}`;
  const descriptionId = `${cardId}-description`;
  const keywordsId = `${cardId}-keywords`;
  const highlightsId = `${cardId}-highlights`;
  const featuresId = `${cardId}-features`;

  const describedBy = [
    tool.description ? descriptionId : undefined,
    tool.keywords.length > 0 ? keywordsId : undefined,
    tool.keypoints.length > 0 ? highlightsId : undefined,
    tool.features.length > 0 ? featuresId : undefined,
  ]
    .filter((value): value is string => Boolean(value))
    .join(" ");

  return (
    <article
      aria-labelledby={`${cardId}-title`}
      aria-describedby={describedBy || undefined}
      className="group relative flex h-full flex-col space-y-4 rounded-2xl border border-slate-200/80 bg-white/95 p-8 shadow-sm shadow-[0_15px_40px_-20px_rgba(15,23,42,0.35)] ring-1 ring-transparent transition-all duration-200 focus-within:-translate-y-1 focus-within:shadow-[0_30px_60px_-25px_rgba(15,23,42,0.4)] focus-within:ring-primary/20 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(15,23,42,0.4)] hover:ring-primary/20"
    >
      <header className="mt-4 flex flex-col gap-4">
        <h3
          id={`${cardId}-title`}
          className="text-2xl font-semibold leading-tight text-slate-900"
        >
          {tool.title}
        </h3>
        {tool.description ? (
          <p
            id={descriptionId}
            className="text-base leading-relaxed text-slate-700"
          >
            {tool.description}
          </p>
        ) : null}
      </header>

      {tool.keywords.length > 0 ? (
        <section aria-labelledby={keywordsId} className="space-y-2">
          <h4
            id={keywordsId}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          >
            {labels.keywords}
          </h4>
          <ul
            className="flex flex-wrap space-x-3 p-0"
            aria-label="Keyword list"
          >
            {tool.keywords.map((keyword) => (
              <li key={keyword}>
                <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {keyword}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {tool.keypoints.length > 0 ? (
        <section aria-labelledby={highlightsId} className="space-y-3">
          <h4
            id={highlightsId}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          >
            {labels.highlights}
          </h4>
          <ul className="grid gap-3 text-sm leading-relaxed text-slate-700">
            {tool.keypoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl py-3"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {tool.features.length > 0 ? (
        <section aria-labelledby={featuresId} className="space-y-3">
          <h4
            id={featuresId}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          >
            {labels.features}
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 p-0 gap-2 text-sm text-primary">
            {tool.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-lg bg-slate-100/60 py-2"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-primary"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <footer className="mt-auto pt-4">
        {tool.link ? (
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:border-primary/0 hover:bg-primary hover:text-white"
          >
            {labels.link}
            <svg
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 7H17V15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-500">
            {labels.linkFallback}
          </span>
        )}
      </footer>
    </article>
  );
}
