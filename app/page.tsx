import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TheVarioDifference from "@/components/home/TheVarioDifference";
import OurStory from "@/components/home/OurStory";
import WhatWeHelpYouInvestIn from "@/components/home/WhatWeHelpYouInvestIn";
import HowOurProcessWorks from "@/components/home/HowOurProcessWorks";
import InsightsAndEducation from "@/components/home/InsightsAndEducation";
import CTABanner from "@/components/ui/CTABanner";
import { getDownloadFiles } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Vario Advisors - Retire With Confidence. Plan With Alternatives.",
  description:
    "We help retirees unlock a modern retirement strategy built on stability, real assets, and smarter diversification.",
};

export default function Home() {
  const downloadFiles = getDownloadFiles();

  return (
    <div className="bg-surface overflow-x-hidden">
      <Hero />

      {/* The Vario Difference Section */}
      <TheVarioDifference />

      {/* Our Story Section */}
      <OurStory />

      {/* What We Help You Invest In Section */}
      <WhatWeHelpYouInvestIn />

      {/* How Our Process Works Section */}
      <HowOurProcessWorks />

      {/* Insights & Education Section */}
      <InsightsAndEducation downloadFiles={downloadFiles} />

      {/* CTA Banner Section */}
      <CTABanner
        title="Build a retirement that doesn't depend on the stock market."
        buttons={[{ text: "Start Your Income Plan", href: "/contact" }]}
      />
    </div>
  );
}
