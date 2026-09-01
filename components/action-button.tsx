import { PhoneCallIcon, XLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "./ui/button";

const ActionButton = () => (
  <div>
    <div className="mt-6 flex items-center">
      <div className="">
        <span className="relative flex items-center justify-center">
          <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-600 opacity-50" />
          <span className="relative inline-flex size-2 rounded-full bg-green-600" />
        </span>{" "}
      </div>
      <p className="ml-2 font-medium text-muted-foreground text-xs tracking-wide">
        Available for hire
      </p>
    </div>
    <div className="mt-2 flex items-center font-semibold">
      <Button
        className="shadow-[0_35px_10px_rgba(0,0,0,0.00),0_23px_9px_rgba(0,0,0,0.01),0_13px_8px_rgba(0,0,0,0.03),0_6px_6px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.06)]"
        size={"lg"}
      >
        <Link
          className="flex items-center justify-center gap-1 font-semibold text-sm"
          href={"https://cal.com/santosh-marar/15-min-meeting"}
        >
          {" "}
          <PhoneCallIcon className="size-4" weight="bold" /> Book a call
        </Link>
      </Button>

      <span className="mx-2 font-normal text-muted-foreground">or</span>

      <Button
        className="shadow-[0_35px_10px_rgba(0,0,0,0.00),0_23px_9px_rgba(0,0,0,0.01),0_13px_8px_rgba(0,0,0,0.03),0_6px_6px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.06)]"
        size={"lg"}
        variant={"outline"}
      >
        <Link
          className="flex items-center justify-center gap-1 font-semibold text-sm"
          href={"https://x.com/santosh_marar"}
        >
          {" "}
          <XLogoIcon className="size-4" weight="bold" /> DM
        </Link>
      </Button>
    </div>
  </div>
);

export default ActionButton;
