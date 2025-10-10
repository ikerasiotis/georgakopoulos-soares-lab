import type { Metadata } from "next";

import { ResearchApproach } from "./_components/ResearchApproach";
import { ResearchFocusAreas } from "./_components/ResearchFocusAreas";
import { ResearchHero } from "./_components/ResearchHero";
import { ResearchMethods } from "./_components/ResearchMethods";
import { ResearchResources } from "./_components/ResearchResources";
import { getResearchPageContent } from "@/libs/api";

export const metadata: Metadata = {
  title: "Georgakopoulos-Soares Lab - Research",
  description:
    "Explore our research areas in cancer genomics and computational biology.",
};

export const dynamic = "force-dynamic";

export default async function ResearchPage() {
  const content = await getResearchPageContent();

  return (
    <div id="research">
      <ResearchHero
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
      />
      <ResearchApproach
        title={content.approachTitle}
        paragraphs={content.approachParagraphs}
        highlights={content.approachHighlights}
      />
      <ResearchFocusAreas
        title={content.focusTitle}
        projectsLabel={content.focusProjectsLabel}
        focusAreas={content.focusAreas}
      />
      <ResearchMethods title={content.methodsTitle} methods={content.methods} />
      <ResearchResources
        title={content.resourcesTitle}
        resources={content.resources}
      />
    </div>
  );
}
