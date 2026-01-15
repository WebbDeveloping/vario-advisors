import ResourcesHero from "@/components/resources/ResourcesHero";
import GuidesSection from "@/components/resources/GuidesSection";
import VideosSection from "@/components/resources/VideosSection";
import ArticlesSection from "@/components/resources/ArticlesSection";
import CTABanner from "@/components/ui/CTABanner";
import { getDownloadFiles } from "@/lib/downloads";

export default function Resources() {
  const downloadFiles = getDownloadFiles();

  return (
    <main className="min-h-screen bg-surface overflow-x-hidden">
      <ResourcesHero />
      <GuidesSection downloadFiles={downloadFiles} />
      <VideosSection />
      <ArticlesSection downloadFiles={downloadFiles} />
      <CTABanner
        title="Ready to Plan Your Retirement?"
        description="Get personalized retirement planning advice tailored to your unique financial situation and goals."
        buttons={[
          { text: "Schedule a Consultation", href: "/contact" },
          {
            text: "Check Your Accredited Status",
            href: "/accredited-investor",
            variant: "secondary",
          },
        ]}
      />
    </main>
  );
}
