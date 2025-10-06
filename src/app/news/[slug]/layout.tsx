import Link from "next/link";

export default function NewsDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        href="/news"
        className="inline-flex items-center font-bold text-primary hover:cursor-pointer transition mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12l7.5-7.5M3 12h18"
          />
        </svg>
        Back to News
      </Link>
      <div>{children}</div>
    </div>
  );
}
