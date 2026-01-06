import Mission from "@/components/about/Mission";
import OurStory from "@/components/about/OurStory";
import OurPhilosophy from "@/components/about/OurPhilosophy";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import AboutCTABanner from "@/components/about/AboutCTABanner";

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <Mission />
      <OurStory />
      <OurPhilosophy />
      <MeetTheTeam />
      <AboutCTABanner />
    </div>
  );
}

