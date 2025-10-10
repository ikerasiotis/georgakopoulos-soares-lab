import Image from "next/image";
import Link from "next/link";

import type { HomepageTeamMember } from "@/libs/api";

const PLACEHOLDER_IMAGE = "https://placehold.co/240x240?text=Team";

export function TeamSpotlight({
  title = "Meet Our Team",
  members,
}: {
  title?: string;
  members: HomepageTeamMember[];
}) {
  console.log(
    "Rendering TeamSpotlight with members:",
    JSON.stringify(members, null, 2)
  ); // --- IGNORE ---

  return (
    <section className="py-16 bg-light" aria-labelledby="team-spotlight">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            id="team-spotlight"
            className="text-3xl font-bold mb-4 text-center"
          >
            {title}
          </h2>
          <div className="section-divider mb-12" />

          {members.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-6">
              {members.map((member) => {
                const photoUrl = member.photoUrl || PLACEHOLDER_IMAGE;
                const role = member.role?.trim();

                return (
                  <article
                    key={member.name}
                    className="flex flex-col items-center text-center gap-3"
                  >
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-primary/20 shadow-sm bg-slate-100">
                      <Image
                        src={photoUrl}
                        alt={member.photoAlt || member.name}
                        height={128}
                        width={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {member.name}
                    </h3>
                    {role ? (
                      <p className="text-sm text-primary font-medium">{role}</p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              Team members will be available soon.
            </p>
          )}
          <div className="mt-10 text-center">
            <Link
              href="/team"
              className="inline-flex items-end gap-2 text-primary hover:text-secondary font-medium"
            >
              Meet the full team
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
