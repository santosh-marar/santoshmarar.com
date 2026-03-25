import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import ActionButton from "./action-button";
import Test from "./try-com";

const HeroSection = () => {
  return (
    <div className="max-w-4xl pt-16 mx-auto px-4 relative tracking-[0.25px]">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-mono text-xs text-zinc-300 dark:text-secondary">
            hello world its,
          </p>
          <p>
            <span className="text-2xl font-bold">Santosh Marar</span>
          </p>
          <p className="text-sm font-medium tracking-[0.25px] text-muted-foreground">
            Full Stack Engineer
          </p>
        </div>

        <ThemeSwitcher />
      </div>

      <div className="text-muted-foreground pt-8 tracking-[0.25px]">
        <p>
          I’m a self-taught developers who builds real products that people can
          actually use.
          <br />
          Not just ideas, I take things from zero to shipped.
          <br />
          Currently building{" "}
          <Link
            href="https://cloud.enops.dev/"
            target="_blank"
            className="font-semibold text-primary"
          >
            enops.dev
          </Link>
          , exploring better ways to design databases.
        </p>
      </div>
      <ActionButton />
      {/* <Test/> */}
    </div>
  );
};

export default HeroSection;
