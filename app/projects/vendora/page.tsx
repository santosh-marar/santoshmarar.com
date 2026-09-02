"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Vendora() {
  return (
    <div>
      <h3 className="font-semibold text-xl">
        <a
          href="https://vendora-sage.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Vendora
        </a>
      </h3>
      <div className="">
        <p className="font-medium text-muted-foreground text-sm">
          Scalable multi-vendor eCommerce platform.
        </p>
        <div className="mt-2 space-x-2">
          <Button size="default" variant="secondary">
            <a
              href="https://vendora-sage.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Try Now
            </a>
          </Button>

          <Button size="default" variant="secondary">
            <a
              href="https://github.com/santosh-marar/vendora"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
      <div>
        <Image
          alt="vendora's homepage img"
          className="mt-4 h-auto w-full rounded border border-muted"
          height={180} // intrinsic height
          src="/vendora.png"
          width={1200} // intrinsic width
        />
      </div>
      <div className="mt-4">
        {/*<p className="text-muted-foreground text-sm font-medium">
            A AI native SASS for generating, visualizing, and exporting db
            schemas to Typescript ORM, SQL.
          </p>*/}
        <h4 className="pt-2 font-semibold text-lg">Overview</h4>
        <p className="font-medium text-base text-muted-foreground">
          Vendora is a full-stack multi-vendor eCommerce platform with dedicated
          admin and seller dashboards for managing products, inventory, and
          orders from a single, scalable system.
        </p>

        <div className="mt-4">
          <h4 className="pt-2 font-semibold text-lg">Tech Stack</h4>
          <p className="font-medium text-base text-muted-foreground">
            Typescript, Nextjs, TRPC, PotgresSQL, Prisma, Tailwind CSS, NextAuth
          </p>
        </div>

        <div className="mt-4">
          <h4 className="pt-2 font-semibold text-lg">Features</h4>

          <ul className="mt-1 list-disc space-y-1 pl-5 font-medium text-base text-muted-foreground">
            <li>
              Dedicated admin and seller dashboards with role-based access
            </li>
            <li>
              Advanced product catalog with variants, pricing, and inventory
              management
            </li>
            <li>
              Complete order management workflow from purchase to fulfillment
            </li>
            <li>Multi-vendor marketplace with independent seller</li>
            <li>
              Scalable architecture designed for high-performance eCommerce
              applications
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
