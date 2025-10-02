import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { TeamMember } from "@/libs/api";

type TeamMembersSectionProps = {
  members: TeamMember[];
};

export function TeamMembersSection({ members }: TeamMembersSectionProps) {
  const hasMembers = members.length > 0;

  console.log("Team Members:", members);

  return (
    <section
      className="py-16 bg-light research-bg"
      aria-labelledby="team-members-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            id="team-members-heading"
            className="text-3xl font-bold mb-4 text-center"
          >
            Meet our Team
          </h2>

          {hasMembers ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {members.map((member) => {
                const portraitSrc =
                  member.portrait?.small ??
                  member.portrait?.thumbnail ??
                  member.portrait?.medium ??
                  member.portrait?.large ??
                  member.portrait?.url ??
                  member.photoUrl ??
                  null;

                const portraitAlt =
                  member.portrait?.alt ?? `${member.name} portrait`;

                return (
                  <article
                    key={member.name}
                    className="team-card flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
                    aria-labelledby={`team-member-${member.name}`}
                  >
                    <div className="flex items-center p-4">
                      <div className="relative w-16 h-16 bg-primary/10 rounded-full flex-shrink-0 mr-4 overflow-hidden">
                        {!portraitSrc ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 h-full w-full text-primary/40 p-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            role="img"
                            aria-label={`${member.name} avatar placeholder`}
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
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        ) : null}
                      </div>
                      <div>
                        <h3
                          id={`team-member-${member.name}`}
                          className="text-lg font-semibold mb-0"
                        >
                          {member.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{member.role}</p>
                        {member.focus ? (
                          <p className="text-gray-700 text-sm mt-1">
                            {member.focus}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    {member.bio ? (
                      <div className="flex-1 px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                        {member.bio}
                      </div>
                    ) : null}
                    <div className="border-t border-gray-100 px-4 py-3 bg-gray-50 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {member.affiliation}
                      </span>
                      <div className="flex space-x-4">
                        {member.email ? (
                          <div className="flex justify-end space-x-2">
                            <a
                              href={`mailto:${member.email}`}
                              className="text-primary hover:text-secondary"
                              aria-label={`Email ${member.name}`}
                            >
                              <FontAwesomeIcon icon={["fas", "envelope"]} />
                            </a>
                          </div>
                        ) : null}
                        {member.linkedin && (
                          <div className="flex space-x-2">
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-secondary"
                              aria-label={`LinkedIn profile of ${member.name}`}
                            >
                              <FontAwesomeIcon icon={["fab", "linkedin"]} />
                            </a>
                          </div>
                        )}
                        {member.github && (
                          <div className="flex space-x-2">
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-secondary"
                              aria-label={`GitHub profile of ${member.name}`}
                            >
                              <FontAwesomeIcon icon={["fab", "github"]} />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              Team profiles will be available soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
