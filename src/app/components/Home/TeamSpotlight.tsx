import Image from "next/image";

import type { HomepageTeamMember } from "@/libs/api";

const PLACEHOLDER_IMAGE = "https://placehold.co/240x240?text=Team";

export function TeamSpotlight({ members }: { members: HomepageTeamMember[] }) {
  return (
    <section className="py-16 bg-light" aria-labelledby="team-spotlight">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 id="team-spotlight" className="text-3xl font-bold mb-4 text-center">
            Meet Our Team
          </h2>
          <div className="section-divider mb-12" />

          {members.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {members.map((member) => {
                const photoUrl = member.photoUrl || PLACEHOLDER_IMAGE;

                return (
                  <article
                    key={member.name}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div className="relative h-32 w-32 md:h-36 md:w-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-sm">
                    <Image
                      src={photoUrl}
                      alt={member.photoAlt || member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {member.name}
                    </h3>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              Team members will be available soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
