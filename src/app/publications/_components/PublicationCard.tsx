import Link from "next/link";

import type { Publication } from "@/libs/api";

type PublicationCardProps = {
  publication: Publication;
  index: number;
};

const ACCENT_CLASSES = [
  "border-primary/70 focus-within:border-primary hover:border-primary",
  "border-secondary/70 focus-within:border-secondary hover:border-secondary",
  "border-accent/70 focus-within:border-accent hover:border-accent",
] as const;

function fancyNumber(value: number) {
  return value.toLocaleString(undefined, { minimumIntegerDigits: 2 });
}

function formatAuthors(authors: Publication["publicationAuthors"]) {
  return authors.map((author) => author.name).join(", ");
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.75 13.25l6.5-6.5m0 0H13m4.25 0V11"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 6.5h-4A2.5 2.5 0 003 9v10a2.5 2.5 0 002.5 2.5h10A2.5 2.5 0 0018 19.5v-4"
      />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V7z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v5h5" />
    </svg>
  );
}

function ResourceIcon({ format }: { format?: string | null }) {
  return format?.toLowerCase() === "pdf" ? <PdfIcon /> : <LinkIcon />;
}

export function PublicationCard({ publication, index }: PublicationCardProps) {
  const {
    id,
    title,
    position,
    publicationAuthors,
    authors,
    summary,
    snippet,
    link,
    resources,
    resultId,
    citations,
    publishedAt,
    isVisible,
  } = publication;

  const displayAuthors =
    publicationAuthors.length > 0 ? publicationAuthors : authors;
  const headingId = `publication-${id}-title`;
  const summaryId = `publication-${id}-summary`;
  const hasCitations = typeof citations === "number" && citations > 0;
  const publishedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString()
    : null;

  return (
    <article
      className={`group rounded-xl border border-slate-200 bg-white shadow-sm transition transform focus-within:-translate-y-0.5 focus-within:shadow-lg hover:-translate-y-0.5 hover:shadow-lg ${
        ACCENT_CLASSES[index % ACCENT_CLASSES.length]
      }`}
      aria-labelledby={headingId}
    >
      <div className="border-l-4 border-transparent p-6">
        {/* <header className="mb-4 space-y-2">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-primary">
            <span aria-label="Position in list">{fancyNumber(position)}</span>
            <span className="flex items-center gap-4 text-slate-400">
              {hasCitations ? (
                <span aria-label={`Citations: ${citations}`}>
                  {citations?.toLocaleString()} citation
                  {citations && citations !== 1 ? "s" : ""}
                </span>
              ) : null}
              {publishedDate ? (
                <time dateTime={publishedAt!}>{publishedDate}</time>
              ) : null}
            </span>
          </div>
          <h2 id={headingId} className="text-2xl font-semibold text-slate-900">
            {title}
          </h2>
        </header> */}

        {displayAuthors.length > 0 ? (
          <p className="text-slate-700 mb-3">
            <span className="sr-only">Authors:</span>
            {formatAuthors(displayAuthors)}
          </p>
        ) : null}

        {summary ? (
          <p id={summaryId} className="text-slate-600 mb-3">
            {summary}
          </p>
        ) : null}

        {snippet ? (
          <p
            className="text-slate-500 text-sm mb-5"
            aria-describedby={summary ? summaryId : undefined}
          >
            {snippet}
          </p>
        ) : null}

        <dl className="mb-5 grid gap-2 text-sm text-slate-500">
          {resultId ? (
            <div className="flex gap-2">
              <dt className="font-semibold text-slate-600">Result ID</dt>
              <dd>{resultId}</dd>
            </div>
          ) : null}
          {link ? (
            <div className="flex gap-2">
              <dt className="font-semibold text-slate-600">Primary link</dt>
              <dd>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                >
                  <LinkIcon />
                  <span>Visit publication</span>
                  <span aria-hidden>↗</span>
                </a>
              </dd>
            </div>
          ) : null}
          {/* <div className="flex gap-2">
            <dt className="font-semibold text-slate-600">Visibility</dt>
            <dd>{isVisible ? "Visible" : "Hidden"}</dd>
          </div> */}
        </dl>

        {resources.length > 0 ? (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-600 mb-2">
              Additional resources
            </h3>
            <ul className="grid gap-2 text-sm">
              {resources.map((resource) => (
                <li key={`${id}-${resource.title}`}>
                  <a
                    href={resource.link ?? link ?? "#"}
                    target={resource.link ? "_blank" : undefined}
                    rel={resource.link ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-secondary transition-colors"
                  >
                    <span className="inline-flex h-6 min-w-[2rem] items-center justify-center rounded-full bg-slate-100 px-2 text-xs font-semibold uppercase text-slate-500">
                      {resource.fileFormat ?? "Resource"}
                    </span>
                    <ResourceIcon format={resource.fileFormat} />
                    <span>{resource.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
