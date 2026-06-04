"use client";
import { ArrowRightIcon, LinkIcon } from "@phosphor-icons/react";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <div className="pt-6 font-medium text-muted-foreground">
      <div>
        <h3 className="px-2 text-lg font-semibold text-primary">
          Work I've Delivered
        </h3>
    
        <Link href="#" className="group flex items-center justify-between rounded-sm px-2 pb-4 pt-1 hover:bg-secondary">
          <div className="text-base">
            <div className="flex items-center">
              <p>Bhoo-Mitra Properties</p>
              <span className="pl-2 text-sm text-primary">|</span>
    
              {/* Stop propagation so clicking this doesn't also trigger the row Link */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open("https://bhoomitraproperties.com.np/", "_blank", "noopener,noreferrer");
                }}
                className="ml-1 flex items-center justify-center rounded-md p-2 cursor-pointer hover:bg-muted hover:text-foreground dark:hover:bg-muted/50"
              >
                <LinkIcon weight="bold" />
              </button>
            </div>
    
            <div className="flex items-center gap-1.5">
              <p className="text-sm">Full Stack Developer</p>
              <span className="text-xs text-primary">|</span>
              <p className="text-sm">Freelance</p>
            </div>
          </div>
    
          <ArrowRightIcon
            weight="bold"
            className="-rotate-45 transition-transform duration-300 ease-in-out group-hover:rotate-0"
          />
        </Link>
      </div>
    </div>
  );
};

export default ExperienceSection;
