"use client"

import { PhoneCallIcon, XIcon, XLogoIcon } from "@phosphor-icons/react";
import { Button } from "./ui/button";
import Link from "next/link";

const ActionButton = () => {
    return (
      <div>
        <div className="flex items-center mt-6  ">
          <div className="">
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-600 opacity-50"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
            </span>{" "}
          </div>
          <p className="text-xs font-medium text-muted-foreground tracking-wide ml-2">
            Available for hire
          </p>
        </div>
        <div className="flex items-center mt-2 font-semibold">
          <Button className="hover:primary/80">
            <Link
              href={"https://cal.com/santosh-marar/15-min-meeting"}
              className="flex items-center gap-1 justify-center font-semibold text-sm"
            >
              {" "}
              <PhoneCallIcon weight="duotone" className="size-4" /> Book a call
            </Link>
          </Button>

          <span className="mx-2 font-normal text-muted-foreground">or</span>

          <Button variant={"outline"}>
            <Link
              href={"https://x.com/santosh_marar"}
              className="flex items-center gap-1 justify-center font-semibold text-sm"
            >
              {" "}
              <XLogoIcon weight="duotone" className="size-4" /> DM
            </Link>
          </Button>
        </div>
      </div>
    );
}
 
export default ActionButton;