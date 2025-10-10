import HomeHero from "./components/Home/hero";
import AboutUs from "./components/Home/about";
import { FeaturedPublications } from "./components/Home/FeaturedPublications";
import { NewsSection } from "./components/Home/NewsSection";
import { ResearchHighlights } from "./components/Home/ResearchHighlights";
import { TeamSpotlight } from "./components/Home/TeamSpotlight";
import { NEWS_ITEMS, RESEARCH_HIGHLIGHTS } from "./_lib/home-page-data";
import { getHomePageContent } from "@/libs/api";

export const dynamic = "force-dynamic";

export default async function Index() {
  const { hero, about, featuredPublications, teamMembers, teamMembersTitle } =
    await getHomePageContent();

  return (
    <div>
      <HomeHero title={hero.title} tagline={hero.subtitle ?? ""} />
      <AboutUs
        heading={about.heading}
        bodyHtml={about.bodyHtml}
        imageUrl={about.imageUrl}
        imageAlt={about.imageAlt}
      />
      <ResearchHighlights highlights={RESEARCH_HIGHLIGHTS} />
      <FeaturedPublications publications={featuredPublications} />
      <TeamSpotlight title={teamMembersTitle} members={teamMembers} />
      <NewsSection news={NEWS_ITEMS} />
    </div>
  );
}
