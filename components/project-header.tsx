"use client";
import ThemeSwitcher from "@/components/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";

const ProjectHeader = () => {
  return (
    <header className="px-2">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "group")}
        >
          <ArrowLeftIcon
            weight="bold"
            className="size-4 transition-all duration-500 text-muted-foreground group-hover:text-primary"
          />
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default ProjectHeader;
