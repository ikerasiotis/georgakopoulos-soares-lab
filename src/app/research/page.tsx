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

export default async function ResearchPage() {
  const content = await getResearchPageContent();

  return (
    <div id="research">
      <ResearchHero
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
      />
      <ResearchApproach
        paragraphs={content.approachParagraphs}
        highlights={content.approachHighlights}
      />
      <ResearchFocusAreas focusAreas={content.focusAreas} />
      <ResearchMethods methods={content.methods} />
      <ResearchResources resources={content.resources} />
    </div>
  );
}
