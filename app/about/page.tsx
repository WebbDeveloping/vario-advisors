import type { Metadata } from "next";
import Mission from "@/components/about/Mission";
import OurStory from "@/components/about/OurStory";
import OurPhilosophy from "@/components/about/OurPhilosophy";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "About Us - Vario Advisors",
  description:
    "Learn about Vario Advisors' mission, philosophy, and team dedicated to helping retirees build secure retirement plans with alternative investments.",
};

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <Mission />
      <OurStory />
      <OurPhilosophy />
      <MeetTheTeam />
      <CTABanner
        buttons={[{ text: "Speak With Our Team", href: "/contact" }]}
      />
    </div>
  );
}
