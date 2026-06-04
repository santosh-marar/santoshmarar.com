import ThemeSwitcher from "./theme-switcher";

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

        {/*<p className="pt-1">
          Based in Nepal, I enjoy collaborating with teams and working across
          different timezones to turn ideas into production-ready products.
        </p>*/}
      </div>
    </div>
  );
};

export default HeroSection;
