import FooterSection from "@/components/footer-section";
import ProjectHeader from "@/components/project-header";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl mx-auto pt-6 md:pt-8">
      <ProjectHeader />
      <main>{children}</main>
      <FooterSection/>
    </div>
  );
}