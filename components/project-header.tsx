"use client";
import ThemeSwitcher from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";

const ProjectHeader = () => {
  return (
    <header className="px-2">
      <div className="flex justify-between items-center">
        <Button variant="outline" className="group">
          <Link href={"/"}>
            <ArrowLeftIcon
              weight="bold"
              className="size-4 transition-all duration-500 text-muted-foreground group-hover:text-primary"
            />
          </Link>
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default ProjectHeader;