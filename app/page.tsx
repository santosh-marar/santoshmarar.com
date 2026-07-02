import ExperienceSection from "@/components/experience-section";
import SocialSection from "@/components/soical-section";
import HeroSection from "@/components/main-section";
import ProjectSection from "@/components/project-section";
import BlogSection from "@/components/blog-section";
import FooterSection from "@/components/footer-section";
// import Navbar from "@/components/navbar-section";

// export default function Page() {
//   return (
//     <main className="relative max-w-2xl pt-12 mx-auto">
//       {/*<Navbar />*/}
//       <HeroSection />
//       <SocialSection />
//       <ExperienceSection />
//       <ProjectSection />
//       <BlogSection />
//       <FooterSection />
//     </main>
//   );
// }


export default function Page() {
  return (
    <main className="grid min-h-screen max-w-2xl grid-rows-[1fr_auto] mx-auto pt-6 md:pt-12">
      <div>
        <HeroSection />
        <SocialSection />
        <ExperienceSection />
        <ProjectSection />
        <BlogSection />
      </div>
      <FooterSection />
    </main>
  );
}