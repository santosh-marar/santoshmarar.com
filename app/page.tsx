import ExperienceSection from "@/components/experience-section";
import SocialSection from "@/components/soical-section";
import HeroSection from "@/components/main-section";
import ProjectSection from "@/components/project-section";
import BlogSection from "@/components/blog-section";
import FooterSection from "@/components/footer-section";
// import Navbar from "@/components/navbar-section";

export default function Page() {
  return (
    <main className="max-w-2xl pt-12 mx-auto">
      {/*<Navbar />*/}
      <HeroSection />
      <SocialSection />
      <ExperienceSection />
      <ProjectSection />
      <BlogSection />
      <FooterSection />
    </main>
  );
}
