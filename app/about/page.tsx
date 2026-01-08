import Mission from "@/components/about/Mission";
import OurStory from "@/components/about/OurStory";
import OurPhilosophy from "@/components/about/OurPhilosophy";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import CTABanner from "@/components/ui/CTABanner";

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
