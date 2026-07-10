import FooterSection from "@/components/footer-section";
import ProjectHeader from "@/components/project-header";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen max-w-2xl grid-rows-[1fr_auto] mx-auto pt-6 md:pt-8">
      <div>
        <ProjectHeader />
        <main>{children}</main>
      </div>
      <FooterSection />
    </div>
  );
}
