import type { MethodItem } from "../_lib/research-data";

interface ResearchMethodsProps {
  title: string;
  methods: MethodItem[];
}

function methodAccentClasses(accent: MethodItem["accent"]) {
  return accent === "primary"
    ? { bg: "bg-primary/10", text: "text-primary" }
    : accent === "secondary"
    ? { bg: "bg-secondary/10", text: "text-secondary" }
    : { bg: "bg-accent/10", text: "text-accent" };
}

export function ResearchMethods({ title, methods }: ResearchMethodsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methods.map((method) => {
              const classes = methodAccentClasses(method.accent);
              return (
                <div
                  key={method.title}
                  className="bg-white p-6 rounded-lg shadow-sm border border-slate-200"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 ${classes.bg} rounded-full flex items-center justify-center mr-4`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${classes.text}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">{method.title}</h3>
                  </div>
                  <p className="text-gray-700">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
