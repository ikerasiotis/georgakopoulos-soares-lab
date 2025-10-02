import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { PrincipalInvestigator } from "@/libs/api";

type PrincipalInvestigatorCardProps = {
  principalInvestigator: PrincipalInvestigator;
};

export function PrincipalInvestigatorCard({
  principalInvestigator,
}: PrincipalInvestigatorCardProps) {
  const portraitSrc =
    principalInvestigator.portrait?.large ??
    principalInvestigator.portrait?.medium ??
    principalInvestigator.portrait?.small ??
    principalInvestigator.portrait?.thumbnail ??
    principalInvestigator.photoUrl ??
    null;

  const portraitAlt =
    principalInvestigator.portrait?.alt ??
    `${principalInvestigator.name} portrait`;

  return (
    <section className="py-16" aria-labelledby="principal-investigator">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative aspect-square bg-white rounded-full overflow-hidden shadow-md border-4 border-white">
                  {!portraitSrc ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 h-full w-full text-primary/40 p-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      role="img"
                      aria-label={`${principalInvestigator.name} avatar placeholder`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  ) : null}

                  {portraitSrc ? (
                    <Image
                      src={portraitSrc}
                      alt={portraitAlt}
                      width={512}
                      height={512}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(min-width: 768px) 320px, 50vw"
                      priority
                    />
                  ) : null}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2
                  id="principal-investigator"
                  className="text-2xl font-bold mb-2 text-primary"
                >
                  {principalInvestigator.name}
                </h2>
                <p className="text-gray-600 mb-4 font-medium">
                  {principalInvestigator.title}
                </p>

                {principalInvestigator.summary.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-gray-700 mb-4"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Education &amp; Training
                  </h3>
                  <ul className="space-y-1 text-gray-700">
                    {principalInvestigator.education.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div
                  className="flex space-x-4"
                  aria-label="Principal investigator social links"
                >
                  {principalInvestigator.socialLinks.map(
                    ({ label, href, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} profile (opens in a new tab)`}
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        <FontAwesomeIcon icon={icon} className="text-xl" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
