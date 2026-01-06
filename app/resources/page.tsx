import ResourcesHero from "@/components/resources/ResourcesHero";
import GuidesSection from "@/components/resources/GuidesSection";
import VideosSection from "@/components/resources/VideosSection";
import ArticlesSection from "@/components/resources/ArticlesSection";
import ResourcesCTA from "@/components/resources/ResourcesCTA";

export default function Resources() {
  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
      <ResourcesHero />
      <GuidesSection />
      <VideosSection />
      <ArticlesSection />
      <ResourcesCTA />
    </main>
  );
}
