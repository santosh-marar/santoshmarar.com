import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/main-section";
import ProjectSection from "@/components/project-section";
import BlogSection from "@/components/blog-section";
import FooterSection from "@/components/footer-section";

export default function Page() {
  return (
    <div className="grid min-h-screen max-w-2xl grid-rows-[1fr_auto] mx-auto pt-6 md:pt-8">
      <div className="space-y-8">
        <HeroSection />
        <ExperienceSection />
        <ProjectSection />
        <BlogSection />
      </div>
      <FooterSection />
    </div>
  );
}