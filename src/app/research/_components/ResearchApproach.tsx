import type { HighlightCard } from "../_lib/research-data";

interface ResearchApproachProps {
  title: string;
  paragraphs: string[];
  highlights: HighlightCard[];
}

function AccentIcon({ accent }: { accent: HighlightCard["accent"] }) {
  const accentClass =
    accent === "primary"
      ? "text-primary"
      : accent === "secondary"
      ? "text-secondary"
      : "text-accent";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-12 w-12 mb-4 ${accentClass}`}
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
  );
}

export function ResearchApproach({
  title,
  paragraphs,
  highlights,
}: ResearchApproachProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-primary">{title}</h2>
              <div className="h-1 w-20 bg-secondary mb-6" />
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-lg mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((card) => (
                  <div
                    key={card.title}
                    className="bg-white/90 border border-slate-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm"
                  >
                    <AccentIcon accent={card.accent} />
                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-700">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
