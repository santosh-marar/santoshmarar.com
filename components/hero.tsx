import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

const HeroSection = () => {
  return (
    <div className="max-w-2xl pt-12 mx-auto px-4 ">
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

      <div className="text-muted-foreground pt-8 font-medium">
        <p className="">
          I'm a{" "}
          <span className="font-semibold text-primary border-b border-dotted">
            self-taught full-stack engineer
          </span>
          ,{"   "}
          who builds products that solve real-world problems. I take them from
          imagination to real-world users, from simple ideas to complex
          platforms.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
