"use client";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";
import ThemeSwitcher from "@/components/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProjectHeader = () => (
  <header className="px-2">
    <div className="flex items-center justify-between">
      <Link
        className={cn(buttonVariants({ variant: "outline" }), "group")}
        href="/"
      >
        <ArrowLeftIcon
          className="size-4 text-muted-foreground transition-all duration-500 group-hover:text-primary"
          weight="bold"
        />
      </Link>
      <ThemeSwitcher />
    </div>
  </header>
);

export default ProjectHeader;
