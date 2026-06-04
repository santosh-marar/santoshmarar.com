import ExperienceSection from "@/components/experience-section";
import SocialSection from "@/components/soical-section";
import HeroSection from "@/components/main-section";

export default function Page() {
  return (
    <main className="max-w-2xl pt-12 mx-auto">
      <HeroSection />
      <SocialSection />
      <ExperienceSection />
    </main>
  );
}
