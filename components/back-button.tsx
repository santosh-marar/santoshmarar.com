"use client";
import { ArrowUUpLeftIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BackButton = ({ className }: { className?: string }) => (
  <aside className={cn(className)}>
    <div className="flex items-center justify-between">
      <Link
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "group size-8 pl-0 pr-2 md:px-2 py-2",
        )}
        href="/"
      >
        <ArrowUUpLeftIcon
          className="size-5 text-muted-foreground transition-all duration-500 group-hover:text-primary"
          weight="bold"
        />
      </Link>
    </div>
  </aside>
);

export default BackButton;
