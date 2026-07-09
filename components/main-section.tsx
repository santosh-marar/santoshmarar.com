import SocialSection from "./soical-section";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";

const HeroSection = () => {
  return (
      <div className="px-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-mono text-xs text-muted-foreground">
              hello world its,
            </p>
            <p>
              <span className="text-2xl font-bold">Santosh Marar</span>
              {/*<span className="text-2xl mx-1 font-bold">/</span>

              <Link href="https://x.com/santosh_marar" target="_blank">
                @santosh_marar
              </Link>*/}
            </p>
          </div>

          <ThemeSwitcher />
        </div>
        <div className="text-muted-foreground pt-6 font-medium">
          <p>
            I'm a{" "}
            <span className="font-semibold text-primary border-b border-dotted">
              self-taught full-stack engineer
            </span>{" "}
            who builds software that solves real problems. I take products from
            imagination to real-world users, turning simple ideas into reliable
            platforms with{" "}
            <Link href="/skills" className="link text-primary">
              my toolkit
            </Link>{" "}
            and expertise.
          </p>

          {/*<p className="pt-1">
          Based in Nepal, I enjoy collaborating with teams and working across
          different timezones to turn ideas into production-ready products.
        </p>*/}
        </div>
        <SocialSection />
      </div>
  );
};

export default HeroSection;
