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

const ExperienceSection = () => {
  return (
    <div className="pt-6 font-medium text-muted-foreground">
      <div>
        <h3 className="px-2 mb-2 text-xl font-bold text-primary">
          Work I've Delivered
        </h3>

        <div className="flex items-center px-2 gap-2">
          <Image src="/BM.png" alt="company's logo" width={24} height={24} />
          <Link
            href="https://bhoomitraproperties.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg cursor-pointer text-primary border-b border-transparent hover:border-b-muted-foreground transition-colors duration-200"
          >
            Bhoo-Mitra Properties
          </Link>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="border-none hover:bg-secondary mt-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-none hover:no-underline">
              <div className="group flex items-center justify-between rounded-sm py-1 hover:bg-secondary">
                <div className="text-base">
                  <div className="flex gap-3 items-center">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-code-xml"
                        aria-hidden="true"
                      >
                        <path d="m18 16 4-4-4-4"></path>
                        <path d="m6 8-4 4 4 4"></path>
                        <path d="m14.5 4-5 16"></path>
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      Full Stack Developer
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 pt-2">
                    <p className="text-sm">Freelance</p>
                    <span className="text-xs text-primary">|</span>
                    <p className="text-sm">06.2025 - 07.2025</p>
                    <span className="text-xs text-primary">|</span>
                    <p className="text-sm">1m</p>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base font-normal">
              <div className="prose prose-zinc dark:prose-invert max-w-none [&_ul]:my-0 [&_li]:my-0.5 [&_li]:text-muted-foreground [&_ul]:text-muted-foreground">
                <ul>
                  <li>
                    Build a marketplace where property buyers and sellers can
                    connect
                  </li>
                  <li>
                    Build a admin dashboard to manager user, property, job
                    portal, video, blog, etc
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
              <div className="ml-8 pt-3 space-x-3">
                <Badge variant={"outline"} className="px-4 py-3 text-xs font-medium text-muted-foreground rounded-md bg-text-primary ring-1 ring-line ring-offset-1 ring-offset-background">Typescript</Badge>
                <Badge variant={"outline"} className="px-4 py-3 text-xs font-medium text-muted-foreground rounded-md bg-text-primary ring-1 ring-line ring-offset-1 ring-offset-background">Next.js</Badge>
                <Badge variant={"outline"} className="px-4 py-3 text-xs font-medium text-muted-foreground rounded-md bg-text-primary ring-1 ring-line ring-offset-1 ring-offset-background">MongoDB</Badge>
                <Badge variant={"outline"} className="px-4 py-3 text-xs font-medium text-muted-foreground rounded-md bg-text-primary ring-1 ring-line ring-offset-1 ring-offset-background">Better-Auth</Badge>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ExperienceSection;
