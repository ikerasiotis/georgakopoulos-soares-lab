import HomeHero from "./components/Home/hero";
import AboutUs from "./components/Home/about";
import { FeaturedPublications } from "./components/Home/FeaturedPublications";
import { NewsSection } from "./components/Home/NewsSection";
import { ResearchHighlights } from "./components/Home/ResearchHighlights";
import { TeamSpotlight } from "./components/Home/TeamSpotlight";
import {
  FEATURED_PUBLICATIONS,
  NEWS_ITEMS,
  RESEARCH_HIGHLIGHTS,
  TEAM_PREVIEW,
} from "./_lib/home-page-data";
import { getHomepageData } from "@/libs/api";

export default async function Index() {
  const homepageData = await getHomepageData();

  const { heroTitle, heroTagline, aboutText, aboutImage } = homepageData || {
    heroTitle: "Georgakopoulos-Soares Lab",
    heroTagline: "Decoding Cancer Genomics through Computational Biology",
    aboutText:
      "The Georgakopoulos-Soares Laboratory is dedicated to understanding the genomic landscape of cancer through innovative computational approaches and data-driven research.",
  };

  return (
    <div>
      <HomeHero title={heroTitle} tagline={heroTagline} />
      <AboutUs aboutText={aboutText} aboutImage={aboutImage} />
      <ResearchHighlights highlights={RESEARCH_HIGHLIGHTS} />
      <FeaturedPublications publications={FEATURED_PUBLICATIONS} />
      <TeamSpotlight team={TEAM_PREVIEW} />
      <NewsSection news={NEWS_ITEMS} />
    </div>
  );
}
