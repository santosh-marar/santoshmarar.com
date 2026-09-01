"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "./ui/badge";

const ExperienceSection = () => (
  <div className="mt-6 font-medium text-muted-foreground">
    <div>
      <h3 className="mb-2 px-2 font-semibold text-lg text-primary">
        Work I've Delivered
      </h3>

      <div className="flex items-center gap-2 px-2">
        <Image alt="company's logo" height={24} src="/BM.png" width={24} />
        <Link
          className="cursor-pointer border-transparent border-b text-base text-primary text-semibold transition-colors duration-200 hover:border-b-muted-foreground"
          href="https://bhoomitraproperties.com.np/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Bhoo-Mitra Properties
        </Link>
      </div>

      <Accordion className="border-none hover:bg-secondary">
        <AccordionItem value="item-1">
          <AccordionTrigger className="border-none hover:no-underline">
            <div className="group flex items-center justify-between rounded-sm py-1 hover:bg-secondary">
              <div className="text-base">
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0">
                    <svg
                      aria-hidden="true"
                      className="lucide lucide-code-xml"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m18 16 4-4-4-4" />
                      <path d="m6 8-4 4 4 4" />
                      <path d="m14.5 4-5 16" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                </div>
                <div className="flex items-center gap-1.5 pt-2">
                  <p className="text-sm">Freelance</p>
                  <span className="text-primary text-xs">|</span>
                  <p className="text-sm">06.2025 - 07.2025</p>
                  <span className="text-primary text-xs">|</span>
                  <p className="text-sm">1m</p>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="font-medium">
            <div className="prose prose-zinc dark:prose-invert max-w-none [&_li]:my-0.5 [&_li]:text-muted-foreground [&_ul]:my-0 [&_ul]:text-muted-foreground">
              <ul>
                <li>
                  Build a marketplace where property buyers and sellers can
                  connect
                </li>
                <li>
                  Build a admin dashboard to manager user, property, job portal,
                  video, blog, etc
                </li>
                <li>
                  Build a custom editor to edit, update, delete blog using
                  tip-tap editor
                </li>
                <li>
                  Build all backend logic including auth, listings and search
                  using Next.js & MongoDB.
                </li>
                <li>Used AWS S3 to manage property image uploads.</li>
                <li>
                  Took the project from zero (design to deployment) to fully
                  working app, alone.
                </li>
              </ul>
            </div>
            <div className="ml-8 flex flex-wrap gap-3 pt-3">
              <Badge
                className="rounded-md bg-text-primary px-4 py-3 font-medium text-muted-foreground text-xs ring-1 ring-line ring-offset-1 ring-offset-background"
                variant={"outline"}
              >
                Typescript
              </Badge>
              <Badge
                className="rounded-md bg-text-primary px-4 py-3 font-medium text-muted-foreground text-xs ring-1 ring-line ring-offset-1 ring-offset-background"
                variant={"outline"}
              >
                Next.js
              </Badge>
              <Badge
                className="rounded-md bg-text-primary px-4 py-3 font-medium text-muted-foreground text-xs ring-1 ring-line ring-offset-1 ring-offset-background"
                variant={"outline"}
              >
                MongoDB
              </Badge>
              <Badge
                className="rounded-md bg-text-primary px-4 py-3 font-medium text-muted-foreground text-xs ring-1 ring-line ring-offset-1 ring-offset-background"
                variant={"outline"}
              >
                Better-Auth
              </Badge>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

export default ExperienceSection;
