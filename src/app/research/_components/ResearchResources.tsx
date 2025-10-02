import type { ResourceItem } from "../_lib/research-data";

interface ResearchResourcesProps {
  resources: ResourceItem[];
}

function resourceAccentClasses(accent: ResourceItem["accent"]) {
  return accent === "primary"
    ? { bg: "bg-primary/10", text: "text-primary" }
    : accent === "secondary"
    ? { bg: "bg-secondary/10", text: "text-secondary" }
    : { bg: "bg-accent/10", text: "text-accent" };
}

export function ResearchResources({ resources }: ResearchResourcesProps) {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Software &amp; Resources
          </h2>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const classes = resourceAccentClasses(resource.accent);

              return (
                <article
                  key={resource.title}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover-scale"
                >
                  <div
                    className={`w-16 h-16 ${classes.bg} rounded-full flex items-center justify-center mb-4`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-8 w-8 ${classes.text}`}
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
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    {resource.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href ?? "#"}
                        target={link.href ? "_blank" : undefined}
                        rel={link.href ? "noopener noreferrer" : undefined}
                        className={`${classes.text} hover:text-secondary transition-colors flex items-center`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
