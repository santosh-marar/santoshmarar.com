import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import ActionButton from "./action-button";
import Test from "./try-com";

const HeroSection = () => {
    return (
      <div className="max-w-4xl pt-16 mx-auto px-4 relative tracking-[0.25px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-mono text-xs text-zinc-300 dark:text-secondary">hello world its,</p>
            <p>
              <span className="text-2xl font-bold">Santosh Marar</span>
            </p>
            <p className="text-sm font-medium tracking-[0.25px] text-muted-foreground">Design Engineer</p>
          </div>

          <ThemeSwitcher />
        </div>

        <div className="text-muted-foreground pt-8">
          <p className="">
            I'm a{" "}
            <span className="font-semibold text-primary">
              self-taught full-stack engineer (MERN)
            </span>{" "}
            who loves building things that <br />
            actually work. I take ideas from design to deployment-whether it's{" "}
            <br /> AI-powered tools or full-scale web apps with{" "}
            <Link
              href="/skills"
              className="font-semibold text-primary border-b"
            >
              my skills
            </Link>
          </p>

          <div className="mt-4">
            <p>
              Recently I shipped{" "}
              <Link
                href="https://bhoomitraproperties.com.np/"
                target="_blank"
                className="font-semibold text-primary border-b"
              >
                bhoo-mitra{" "}
              </Link>
              (a real state marketplace for client).
            </p>
            <p>
              Right now I'm building{" "}
              <Link
                href="https://cloud.enops.dev/"
                target="_blank"
                className="font-semibold text-primary border-b"
              >
                enops.dev{" "}
              </Link>
              (an AI database design platform)
            </p>
          </div>
        </div>
        <ActionButton />
        {/* <Test/> */}
      </div>
    );
}
 
export default HeroSection;