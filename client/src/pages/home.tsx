import { HeroSection } from "@/components/hero-section";
import { ProjectOverview } from "@/components/project-overview";
import { DeveloperTeam } from "@/components/developer-team";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectOverview />
      <DeveloperTeam />
      <CallToAction />
      <Footer />
    </div>
  );
}
