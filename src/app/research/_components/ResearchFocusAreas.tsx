import type { FocusArea } from "../_lib/research-data";

interface ResearchFocusAreasProps {
  focusAreas: FocusArea[];
}

function AccentCircle({ accent }: { accent: FocusArea["accent"] }) {
  const backgroundClass =
    accent === "primary"
      ? "bg-primary/10 text-primary"
      : accent === "secondary"
      ? "bg-secondary/10 text-secondary"
      : "bg-accent/10 text-accent";

  return (
    <div
      className={`w-48 h-48 ${backgroundClass} rounded-full flex items-center justify-center research-icon transition-transform duration-300`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24"
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

export function ResearchFocusAreas({ focusAreas }: ResearchFocusAreasProps) {
  return (
    <section className="py-16 bg-light research-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Research Focus Areas
          </h2>
          <div className="section-divider mb-12" />

          {focusAreas.map((area) => (
            <article key={area.title} className="mb-16 last:mb-0 research-card">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <AccentCircle accent={area.accent} />
                </div>
                <div className="md:w-2/3">
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      area.accent === "primary"
                        ? "text-primary"
                        : area.accent === "secondary"
                        ? "text-secondary"
                        : "text-accent"
                    }`}
                  >
                    {area.title}
                  </h3>
                  {area.description.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className="text-gray-700 mb-4">
                      {paragraph}
                    </p>
                  ))}

                  <div className="mt-6 space-y-4">
                    <h4
                      className={`text-lg font-semibold ${
                        area.accent === "primary"
                          ? "text-primary"
                          : area.accent === "secondary"
                          ? "text-secondary"
                          : "text-accent"
                      }`}
                    >
                      Key Projects:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {area.projects.map((project) => (
                        <li key={project}>{project}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-sm ${
                          area.accent === "primary"
                            ? "bg-primary/10 text-primary"
                            : area.accent === "secondary"
                            ? "bg-secondary/10 text-secondary"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
