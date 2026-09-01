"use client";
import { ArrowRightIcon, LinkIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div className="mt-6 font-medium text-muted-foreground">
      <div>
        <h3 className="mb-2 px-2 font-semibold text-lg text-primary">
          Projects I've Built
        </h3>

        <Link
          className="group flex items-center justify-between rounded-sm px-2 pb-4 hover:bg-secondary"
          href="/projects/enops.dev"
        >
          <div className="flex items-center gap-4">
            {/*<Image src="/plogo.png" alt="company's logo" width={24} height={24} />*/}
            <div className="text-base">
              <div className="flex items-center">
                <p>Enops.dev</p>
                <span className="pl-2 text-primary text-sm">|</span>

                {/* Stop propagation so clicking this doesn't also trigger the row Link */}
                <button
                  className="ml-1 flex cursor-pointer items-center justify-center rounded-md p-2 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      "https://enops.dev/",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <LinkIcon weight="bold" />
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <p className="text-sm">Oct 24, 2025 - Present</p>
              </div>
            </div>
          </div>

          <ArrowRightIcon
            className="-rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0"
            weight="bold"
          />
        </Link>

        <hr className="my-1" />

        <Link
          className="group flex items-center justify-between rounded-sm px-2 pt-1 pb-4 hover:bg-secondary"
          href="/projects/vendora"
        >
          <div className="flex items-center gap-4">
            <div className="text-base">
              <div className="flex items-center">
                <p>Vendora</p>
                <span className="pl-2 text-primary text-sm">|</span>

                {/* Stop propagation so clicking this doesn't also trigger the row Link */}
                <button
                  className="ml-1 flex cursor-pointer items-center justify-center rounded-md p-2 hover:bg-muted hover:text-foreground dark:hover:bg-muted/50"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      "https://vendora-sage.vercel.app/",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <LinkIcon weight="bold" />
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <p className="text-sm">Jan 21, 2025 - Present</p>
              </div>
            </div>
          </div>

          <ArrowRightIcon
            className="-rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0"
            weight="bold"
          />
        </Link>

        {/*<hr className="my-1" />*/}

        <p className="mt-1 px-2">
          Explore more projects on {}
          <a
            className="link"
            href="https://github.com/santosh-marar"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectSection;
