"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Vendora() {
  return (
    <div>
      {/*Project */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">
          <a
            href="https://vendora-sage.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vendora
          </a>
        </h3>
        <div className="">
          <p className="text-muted-foreground text-sm font-medium">
            Scalable multi-vendor eCommerce platform.
          </p>
          <div className="mt-2 space-x-2">
            <Button variant="secondary" size="default">
              <a
                href="https://vendora-sage.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Now
              </a>
            </Button>

            <Button variant="secondary" size="default">
              <a
                href="https://github.com/santosh-marar/vendora"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/vendora.png"
            alt="vendora's homepage img"
            width={1200} // intrinsic width
            height={180} // intrinsic height
            className="h-auto w-full mt-4 border border-muted rounded"
          />
        </div>
        <div className="mt-4">
          {/*<p className="text-muted-foreground text-sm font-medium">
            A AI native SASS for generating, visualizing, and exporting db
            schemas to Typescript ORM, SQL.
          </p>*/}
          <h4 className="text-lg font-semibold pt-2">Overview</h4>
          <p className="text-muted-foreground text-base font-medium">
            Vendora is a full-stack multi-vendor eCommerce platform with dedicated admin and
            seller dashboards for managing products,
            inventory, and orders from a single, scalable system.
          </p>

          <div className="mt-4">
            <h4 className="text-lg font-semibold pt-2">Tech Stack</h4>
            <p className="text-muted-foreground text-base font-medium">
              Typescript, Nextjs, TRPC, PotgresSQL, Prisma, Tailwind CSS,
              NextAuth
            </p>
          </div>

          <div className="mt-4">
            <h4 className="pt-2 text-lg font-semibold">Features</h4>

            <ul className="text-muted-foreground mt-1 list-disc space-y-1 pl-5 text-base font-medium">
              <li>Dedicated admin and seller dashboards with role-based access</li>
              <li>Advanced product catalog with variants, pricing, and inventory management</li>
              <li>Complete order management workflow from purchase to fulfillment</li>
              <li>Multi-vendor marketplace with independent seller</li>
              <li>Scalable architecture designed for high-performance eCommerce applications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
