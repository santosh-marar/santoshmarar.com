"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Enops() {
  return (
    <div>
      <h3 className="font-semibold text-xl">
        <a href="https://enops.dev" rel="noopener noreferrer" target="_blank">
          Enops.dev
        </a>
      </h3>
      <div className="">
        {/*<p className="text-muted-foreground text-xs">
            2025 <span>.</span> Typescript, Nextjs, Bun, Hono,PotgresSQL,
            Better-Auth,Dodo Payment, Vercel AI SDK, Vercel AI Gateway{" "}
          </p>*/}
        <p className="font-medium text-muted-foreground text-sm">
          Generate, visualize, and export db schemas to Typescript ORM, SQL.
        </p>
        <div className="mt-2 space-x-2">
          <Button size="default" variant="secondary">
            <a
              href="https://enops.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              Try Now
            </a>
          </Button>

          <Button size="default" variant="secondary">
            <a
              href="https://github.com/santosh-marar/enops-community"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </Button>

          <Button disabled size="default" variant="outline">
            <a
              href="https://enops.dev"
              rel="noopener noreferrer"
              target="_blank"
            >
              Case Study
            </a>
          </Button>
        </div>
      </div>
      <div>
        <Image
          alt="enops.dev logo"
          className="mt-4 h-auto w-full rounded border border-muted"
          height={180} // intrinsic height
          loading="eager"
          src="/enops.png"
          width={1200} // intrinsic width
        />
      </div>
      <div className="mt-4">
        {/*<p className="text-muted-foreground text-sm font-medium">
            A AI native SASS for generating, visualizing, and exporting db
            schemas to Typescript ORM, SQL.
          </p>*/}
        <h4 className="pt-2 font-semibold text-lg">Overview</h4>
        <p className="font-medium text-base text-muted-foreground">
          Enops.dev is an AI-powered database design platform that enables
          developers to generate, visualize, edit, and export production-ready
          database schemas from a single workspace.
        </p>

        <div className="mt-4">
          <h4 className="pt-2 font-semibold text-lg">Tech Stack</h4>
          <p className="font-medium text-base text-muted-foreground">
            Typescript, Nextjs, Bun, Hono, PotgresSQL, Drizzle ORM, Schdn/UI,
            Tailwind CSS, Better-Auth, Dodo Payment, Vercel AI SDK, Vercel AI
            Gateway
          </p>
        </div>

        <div className="mt-4">
          <h4 className="pt-2 font-semibold text-lg">Features</h4>

          <ul className="mt-1 list-disc space-y-1 pl-5 font-medium text-base text-muted-foreground">
            <li>AI-powered database schema generation</li>
            <li>DBML editor with visual ERD</li>
            <li>Production-ready exports for Prisma, Drizzle, SQL, and DBML</li>
            <li>Schema versioning with change history and rollbacks</li>
            <li>AI agents for schema review and optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
