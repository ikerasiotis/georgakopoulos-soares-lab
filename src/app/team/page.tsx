import { PrincipalInvestigatorCard } from "./_components/PrincipalInvestigatorCard";
import { TeamHero } from "./_components/TeamHero";
import { TeamMembersSection } from "./_components/TeamMembersSection";
import { getTeamPageContent } from "@/libs/api";

import type { ImageVariantSet, PrincipalInvestigator, TeamMember } from "@/libs/api";

export const metadata = {
  title: "Georgakopoulos-Soares Lab - Team",
  description:
    "Meet the researchers driving innovation in cancer genomics and computational biology.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function TeamPage() {
  const {
    heroTitle,
    heroSubtitle,
    principalInvestigator,
    members,
    membersSectionTitle,
    pastMembers,
    pastMembersSectionTitle,
  } = await getTeamPageContent();

  const resolvePortraitSrc = (
    portrait?: ImageVariantSet | null
  ): string | null =>
    portrait?.large ??
    portrait?.medium ??
    portrait?.small ??
    portrait?.thumbnail ??
    portrait?.url ??
    null;

  const resolvedPrincipalInvestigator: PrincipalInvestigator = {
    ...principalInvestigator,
    photoUrl:
      resolvePortraitSrc(principalInvestigator.portrait ?? null) ??
      principalInvestigator.photoUrl,
  };

  const resolvedMembers: TeamMember[] = members.map((member) => ({
    ...member,
    photoUrl: resolvePortraitSrc(member.portrait ?? null) ?? member.photoUrl,
  }));

  const resolvedPastMembers: TeamMember[] = pastMembers.map((member) => ({
    ...member,
    photoUrl: resolvePortraitSrc(member.portrait ?? null) ?? member.photoUrl,
  }));

  return (
    <div>
      <TeamHero title={heroTitle} subtitle={heroSubtitle} />
      <PrincipalInvestigatorCard
        principalInvestigator={resolvedPrincipalInvestigator}
      />
      <TeamMembersSection
        title={membersSectionTitle}
        headingId="team-members-heading"
        members={resolvedMembers}
      />
      <TeamMembersSection
        title={pastMembersSectionTitle}
        headingId="past-team-members-heading"
        members={resolvedPastMembers}
        hideWhenEmpty
        variant="minimal"
      />
    </div>
  );
}
