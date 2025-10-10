import type { Metadata } from "next";

import Link from "next/link";

import { getPublications } from "@/libs/api";
import { PublicationCard } from "./_components/PublicationCard";

export const metadata: Metadata = {
  title: "Georgakopoulos-Soares Lab - Publications",
  description:
    "Explore our latest publications in cancer genomics and computational biology.",
};

export const dynamic = "force-dynamic";

function parsePage(
  searchParams?: Record<string, string | string[] | undefined>
) {
  const raw = typeof searchParams?.page === "string" ? searchParams.page : "1";
  const value = Number.parseInt(raw, 10);
  return Number.isFinite(value) && value > 0 ? value : 1;
}

export default async function PublicationsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { page } = await searchParams;
  const currentPage = parsePage({ page });
  const { data: publications, meta } = await getPublications(currentPage, 10);
  const firstIndex = (meta.page - 1) * meta.pageSize + 1;
  const lastIndex = Math.min(meta.total, meta.page * meta.pageSize);
  const hasPrevious = meta.page > 1;
  const hasNext = meta.page < meta.pageCount;

  return (
    <div id="publications">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Publications</h1>
            <p className="text-xl">
              Peer-reviewed research and preprints from the
              Georgakopoulos-Soares Lab
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-sm text-slate-500" aria-live="polite">
              Showing {firstIndex.toLocaleString()}–{lastIndex.toLocaleString()}{" "}
              of {meta.total.toLocaleString()} publications
            </p>

            {publications.map((publication, index) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
                index={index}
              />
            ))}

            <nav
              aria-label="Publications pagination"
              className="flex items-center justify-between pt-8"
            >
              <PaginationLink
                label="Previous"
                targetPage={Math.max(1, meta.page - 1)}
                disabled={!hasPrevious}
              />

              <span className="text-sm text-slate-500" aria-live="polite">
                Page {meta.page} of {meta.pageCount}
              </span>

              <PaginationLink
                label="Next"
                targetPage={Math.min(meta.page + 1, meta.pageCount)}
                disabled={!hasNext}
              />
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

type PaginationLinkProps = {
  label: string;
  targetPage: number;
  disabled: boolean;
};

function PaginationLink({ label, targetPage, disabled }: PaginationLinkProps) {
  const baseClasses =
    "inline-flex items-center px-4 py-2 rounded-md border text-sm font-medium transition-colors";
  const enabledClasses =
    "border-slate-300 text-primary hover:border-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  const disabledClasses = "border-slate-200 text-slate-300 cursor-not-allowed";

  if (disabled) {
    return (
      <span className={`${baseClasses} ${disabledClasses}`} aria-disabled>
        {label}
      </span>
    );
  }

  return (
    <Link
      href={`?page=${targetPage}`}
      className={`${baseClasses} ${enabledClasses}`}
    >
      {label}
    </Link>
  );
}
