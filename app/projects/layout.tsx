import BackButton from "@/components/back-button";
import FooterSection from "@/components/footer-section";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto flex max-w-3xl flex-col space-y-2 px-4 pt-6 sm:px-8 md:pt-8">
      {/* Mobile */}
      <BackButton className="-ml-1.5 xs:hidden" />

      <BackButton className="fixed left-[max(1rem,calc(50%-24rem))] mt-4 xs:block hidden md:mt-6" />
      <div className="xs:ml-12 max-w-2xl">
        <main>{children}</main>
        <FooterSection />
      </div>
    </div>
  );
}
