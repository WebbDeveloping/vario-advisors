import Hero from "@/components/home/Hero";
import TheVarioDifference from "@/components/home/TheVarioDifference";
import OurStory from "@/components/home/OurStory";
import WhatWeHelpYouInvestIn from "@/components/home/WhatWeHelpYouInvestIn";
import HowOurProcessWorks from "@/components/home/HowOurProcessWorks";
import InsightsAndEducation from "@/components/home/InsightsAndEducation";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
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
      <InsightsAndEducation />

      {/* CTA Banner Section */}
      <CTABanner />
    </div>
  );
}
