import { HeroSlider } from "@/components/home/hero-slider";
import { StatsStrip } from "@/components/home/stats-strip";
import { CategoriesSection } from "@/components/home/categories-section";
import { FeaturedStudios } from "@/components/home/featured-studios";
import { HowItWork } from "@/components/home/how-it-work";
import { GuaranteesSection } from "@/components/home/guarantees-section";
import { HostCta } from "@/components/home/host-cta";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsStrip />
      <CategoriesSection />
      <FeaturedStudios />
      <HowItWork limit={4}/>
      <GuaranteesSection />
      <HostCta />
    </>
  );
}
