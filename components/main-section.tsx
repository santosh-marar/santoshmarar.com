import Link from "next/link";
import SocialSection from "./soical-section";
import ThemeSwitcher from "./theme-switcher";

const HeroSection = () => {
  return (
    <div className="px-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-muted-foreground text-xs">
            Hello world! I'm
          </p>
          <p>
            <span className="font-bold text-2xl">Santosh Marar</span>
            {/*<span className="text-2xl mx-1 font-bold">/</span>

              <Link href="https://x.com/santosh_marar" target="_blank">
                @santosh_marar
              </Link>*/}
          </p>
        </div>

        <ThemeSwitcher />
      </div>
      <div className="pt-6 font-medium text-muted-foreground">
        <p>
          I'm a{" "}
          <span className="border-b border-dotted font-semibold text-primary">
            self-taught full-stack engineer
          </span>{" "}
          who builds software that solves real problems. I take products from
          imagination to real-world users, turning simple ideas into reliable
          platforms with{" "}
          <Link className="link text-primary" href="/skills">
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
