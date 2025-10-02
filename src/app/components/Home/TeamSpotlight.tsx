import Link from "next/link";

import { TEAM_LEAD } from "@/app/_lib/home-page-data";
import type { TeamMemberPreview } from "@/app/_lib/home-page-data";

const accentBackground: Record<string, string> = {
  primary: "bg-primary/10",
  secondary: "bg-secondary/10",
  accent: "bg-accent/10",
};

const accentText: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

function SocialIcon({ icon }: { icon: string }) {
  const iconClasses = "h-4 w-4";
  switch (icon) {
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" className={iconClasses} aria-hidden>
          <path
            fill="currentColor"
            d="M20.94 7.04c.01.17.01.35.01.52 0 5.27-4.01 11.35-11.35 11.35-2.25 0-4.34-.66-6.1-1.8.31.04.63.06.95.06 1.87 0 3.59-.64 4.95-1.71a4.03 4.03 0 01-3.76-2.8c.25.04.51.07.77.07.38 0 .75-.05 1.1-.15a4.02 4.02 0 01-3.23-3.95v-.05c.54.3 1.16.48 1.82.5a4.01 4.01 0 01-1.79-3.34c0-.73.2-1.41.55-2a11.42 11.42 0 008.29 4.21 4.56 4.56 0 01-.1-.92 4 4 0 014-4c1.15 0 2.2.49 2.93 1.28a7.9 7.9 0 002.54-.97 4.01 4.01 0 01-1.76 2.21 7.96 7.96 0 002.3-.63A8.6 8.6 0 0120.94 7.04z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={iconClasses} aria-hidden>
          <path
            fill="currentColor"
            d="M19 3A2.94 2.94 0 0122 6v12a2.94 2.94 0 01-3 3H5a2.94 2.94 0 01-3-3V6a2.94 2.94 0 013-3zm-8.2 8.74H8.19v7H10.8zM9.49 7.5a1.46 1.46 0 10-1.45 1.46 1.45 1.45 0 001.45-1.46zm9.5 4.93a4.05 4.05 0 00-4.29-4.27A3.69 3.69 0 0012 9.7h-.09V8.74H9.49q.06 1.17 0 7h2.43v-3.91c0-.21 0-.43.08-.58a1.44 1.44 0 011.33-.93c.94 0 1.31.7 1.31 1.73v3.69h2.45z"
          />
        </svg>
      );
    case "google":
      return (
        <svg viewBox="0 0 24 24" className={iconClasses} aria-hidden>
          <path
            fill="#4285F4"
            d="M21.35 11.1h-9.18v3.62h5.3c-.23 1.2-.93 2.2-1.98 2.88v2.39h3.2c1.87-1.72 2.66-4.25 2.66-7.05 0-.47-.04-.93-.1-1.84z"
          />
          <path
            fill="#34A853"
            d="M12.17 22c2.64 0 4.86-.87 6.48-2.34l-3.2-2.39c-.89.6-2.05.96-3.28.96-2.52 0-4.66-1.7-5.42-3.98H3.47v2.48A9.99 9.99 0 0012.17 22z"
          />
          <path
            fill="#FBBC05"
            d="M6.75 14.25a5.99 5.99 0 010-3.75V8.02H3.47a9.99 9.99 0 000 7.96l3.28-2.73z"
          />
          <path
            fill="#EA4335"
            d="M12.17 6.46a5.43 5.43 0 013.82 1.49l2.84-2.84A9.99 9.99 0 003.47 8.02l3.28 2.48a5.88 5.88 0 015.42-4.04z"
          />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={iconClasses} aria-hidden>
          <path
            fill="currentColor"
            d="M12 2a10 10 0 00-3.16 19.48c.5.1.68-.22.68-.48l-.01-1.68c-2.77.6-3.35-1.34-3.35-1.34a2.63 2.63 0 00-1.1-1.45c-.9-.63.07-.62.07-.62a2.08 2.08 0 011.5 1 2.11 2.11 0 002.88.82 2.13 2.13 0 01.63-1.32c-2.22-.25-4.56-1.11-4.56-4.92A3.86 3.86 0 017.09 8s-.21-.58-.78-1.94a3.7 3.7 0 01.1-1.86s.7-.22 2.3.87a7.9 7.9 0 014.2 0c1.6-1.09 2.3-.87 2.3-.87a3.7 3.7 0 01.1 1.86A4 4 0 0116 10.8c0 3.83-2.34 4.66-4.57 4.9a2.39 2.39 0 01.68 1.85l-.01 2.74c0 .27.18.59.69.48A10 10 0 0012 2z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function TeamSpotlight({
  team,
}: {
  team: TeamMemberPreview[];
}) {
  return (
    <section className="py-16 bg-light" aria-labelledby="team-spotlight">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 id="team-spotlight" className="text-3xl font-bold mb-4 text-center">
            Meet Our Team
          </h2>
          <div className="section-divider mb-12" />

          <article className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/3">
              <div className="aspect-square bg-primary/10 rounded-full overflow-hidden flex items-center justify-center">
                <span className="sr-only">Portrait placeholder</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-36 w-36 text-primary/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2 text-primary">
                {TEAM_LEAD.name}
              </h3>
              <p className="text-gray-600 mb-4">{TEAM_LEAD.role}</p>
              {TEAM_LEAD.summary.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}
              <div className="flex space-x-4" aria-label="Social links">
                {TEAM_LEAD.socials.map(({ icon, href }) => (
                  <Link
                    key={icon}
                    href={href}
                    className="text-primary hover:text-secondary"
                  >
                    <SocialIcon icon={icon} />
                  </Link>
                ))}
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <article
                key={member.name}
                className={`bg-white rounded-lg shadow-md overflow-hidden border-t-4 ${
                  accentText[member.accent]
                }`}
              >
                <div className={`aspect-square ${accentBackground[member.accent]}`}>
                  <span className="sr-only">Portrait placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{member.role}</p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex space-x-3" aria-label={`${member.name} social links`}>
                    {member.socials.map((social) => (
                      <Link
                        key={social.icon}
                        href={social.href}
                        className={`${accentText[member.accent]} hover:text-secondary`}
                      >
                        <SocialIcon icon={social.icon} />
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
