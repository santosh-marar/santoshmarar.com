"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/*Project */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">
          <a href="https://enops.dev" target="_blank" rel="noopener noreferrer">
            Enops.dev
          </a>
        </h3>
        <div className="">
          {/*<p className="text-muted-foreground text-xs">
            2025 <span>.</span> Typescript, Nextjs, Bun, Hono,PotgresSQL,
            Better-Auth,Dodo Payment, Vercel AI SDK, Vercel AI Gateway{" "}
          </p>*/}
          <p className="text-muted-foreground text-sm font-medium">
            Generate, visualize, and export db schemas to Typescript ORM, SQL.
          </p>
          <div className="mt-2 space-x-2">
            <Button variant="secondary" size="default">
              <a
                href="https://enops.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Now
              </a>
            </Button>

            <Button variant="secondary" size="default">
              <a
                href="https://enops.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>

            <Button variant="outline" size="default" disabled>
              <a
                href="https://enops.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Case Study
              </a>
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/enops.png"
            alt="enops.dev logo"
            width={1200} // intrinsic width
            height={180} // intrinsic height
            className="h-auto w-full mt-4 border border-muted rounded"
          />
        </div>
        <div className="mt-4">
          {/*<p className="text-muted-foreground text-sm font-medium">
            A AI native SASS for generating, visualizing, and exporting db
            schemas to Typescript ORM, SQL.
          </p>*/}
          <h4 className="text-base font-semibold pt-2">Overview</h4>
          <p className="text-muted-foreground text-base font-medium">
            Enops.dev is an AI-powered database design platform that enables
            developers to generate, visualize, edit, and export production-ready
            database schemas from a single workspace.
          </p>

          <div className="mt-4">
            <h4 className="text-base font-semibold pt-2">Tech Stack</h4>
            <p className="text-muted-foreground text-base font-medium">
              Typescript, Nextjs, Bun, Hono, PotgresSQL, Better-Auth, Dodo
              Payment, Vercel AI SDK, Vercel AI Gateway
            </p>
          </div>

          <div className="mt-4">
            <h4 className="pt-2 text-base font-semibold">Features</h4>

            <ul className="text-muted-foreground mt-1 list-disc space-y-1 pl-5 text-base font-medium">
              <li>AI-powered database schema generation</li>
              <li>DBML editor with visual ERD</li>
              <li>
                Production-ready exports for Prisma, Drizzle, SQL, and DBML
              </li>
              <li>Schema versioning with change history and rollbacks</li>
              <li>AI agents for schema review and optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
