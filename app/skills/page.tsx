import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Technology {
  logo?: string;
  logoClassName?: string;
  name: string;
}

interface SkillCategory {
  label: string;
  technologies: Technology[];
}

const PRIMARY_STACK: Technology[] = [
  { logo: "/tech-logo/typescript.svg", name: "TypeScript" },
  { logo: "/tech-logo/nextjs.svg", name: "Next.js" },
  { logo: "/tech-logo/bun.svg", name: "Bun" },
  { logo: "/tech-logo/postgres.svg", name: "PostgreSQL" },
  { logo: "/tech-logo/mongodb.svg", logoClassName: "w-5 h-5", name: "MongoDB" },
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Core",
    technologies: [
      { logo: "/tech-logo/typescript.svg", name: "TypeScript" },
      { logo: "/tech-logo/javascript.svg", name: "JavaScript" },
      { logo: "/tech-logo/html.svg", name: "HTML" },
      { logo: "/tech-logo/css.svg", name: "CSS" },
    ],
  },
  {
    label: "Frontend",
    technologies: [
      { logo: "/tech-logo/react.svg", name: "React" },
      { logo: "/tech-logo/nextjs.svg", name: "Next.js" },
      { logo: "/tech-logo/shadcn.svg", name: "Shadcn/UI" },
      { logo: "/tech-logo/tailwind.svg", name: "Tailwind CSS" },
    ],
  },
  {
    label: "Backend",
    technologies: [
      { logo: "/tech-logo/nodejs.svg", name: "Node.js" },
      { logo: "/tech-logo/express.svg", name: "Express" },
      { logo: "/tech-logo/bun.svg", name: "Bun" },
      { logo: "/tech-logo/hono.svg", name: "Hono" },
      { logo: "/tech-logo/rest.svg", name: "REST" },
      { logo: "/tech-logo/trpc.svg", name: "tRPC" },
      {
        logo: "/tech-logo/bullmq.svg",
        logoClassName: "w-6 h-6",
        name: "BullMQ",
      },
      { logo: "/tech-logo/websocket.svg", name: "WebSocket" },
    ],
  },
  {
    label: "Database",
    technologies: [
      { logo: "/tech-logo/postgres.svg", name: "PostgreSQL" },
      {
        logo: "/tech-logo/mongodb.svg",
        logoClassName: "w-6 h-6",
        name: "MongoDB",
      },
      { logo: "/tech-logo/redis.svg", name: "Redis" },
      { logo: "/tech-logo/drizzle-orm.svg", name: "Drizzle ORM" },
      {
        logo: "/tech-logo/prisma.svg",
        logoClassName: "w-6 h-6",
        name: "Prisma ORM",
      },
    ],
  },
  {
    label: "AI",
    technologies: [
      { name: "Agent Workflows" },
      { name: "RAG" },
      { name: "Vercel AI SDK" },
      { name: "AI Gateway" },
      { name: "OpenAI" },
      { name: "Claude" },
    ],
  },
  {
    label: "Cloud & DevOps",
    technologies: [
      {
        logo: "/tech-logo/docker.svg",
        logoClassName: "w-6 h-6",
        name: "Docker",
      },
      { logo: "/tech-logo/vercel.svg", name: "Vercel" },
      {
        logo: "/tech-logo/ubuntu.svg",
        logoClassName: "w-6 h-6",
        name: "Linux",
      },
      { logo: "/tech-logo/aws.svg", logoClassName: "w-6 h-6", name: "AWS" },
    ],
  },
  {
    label: "Tools & Frameworks",
    technologies: [
      { name: "Zed" },
      { logo: "/tech-logo/git.svg", name: "Git" },
      { logo: "/tech-logo/postman.svg", name: "Postman" },
      { logo: "/tech-logo/pnpm.svg", logoClassName: "w-6 h-6", name: "Pnpm" },
      { logo: "/tech-logo/vscode.svg", name: "VS Code" },
      {
        logo: "/tech-logo/turborepo.svg",
        logoClassName: "w-6 h-6",
        name: "Turborepo",
      },
      { logo: "/tech-logo/figma.svg", name: "Figma" },
      { logo: "/tech-logo/better-auth.svg", name: "Better-Auth" },
      { logo: "/tech-logo/zod.svg", logoClassName: "h-6 w-6", name: "Zod" },
    ],
  },
];

function TechnologyBadge({ name, logo, logoClassName }: Technology) {
  return (
    <Badge
      className="border-dotted px-2 py-3 text-primary text-xs"
      variant="outline"
    >
      {logo && (
        <Image
          alt={`${name} logo`}
          className={cn("h-4 w-4", logoClassName)}
          height={16}
          src={logo}
          width={16}
        />
      )}
      {name}
    </Badge>
  );
}

function TechnologyBadgeList({ technologies }: { technologies: Technology[] }) {
  return (
    <div className="mt-1 flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <TechnologyBadge key={tech.name} {...tech} />
      ))}
    </div>
  );
}

const Skills = () => (
  <div>
    <h3 className="font-semibold text-xl">Skills & Toolkit</h3>
    <p className="mt-1 font-medium text-muted-foreground text-sm">
      The technologies and tools I use to turn ideas into reliable software.
    </p>

    <p className="pt-4 font-medium text-muted-foreground">
      My primary stack is{" "}
      {PRIMARY_STACK.map((tech, i) => (
        <span key={tech.name}>
          <TechnologyBadge {...tech} />
          {i < PRIMARY_STACK.length - 1 ? ", " : ""}
        </span>
      ))}
      . Over the years, I&apos;ve built a toolkit focused on modern web and AI
      development. These are the technologies I use most often to bring ideas
      into production.
    </p>

    <div className="space-y-4 pt-4 font-medium text-muted-foreground">
      {SKILL_CATEGORIES.map((category) => (
        <div key={category.label}>
          <p className="font text-sm">&lt;/{category.label}&gt;</p>
          <TechnologyBadgeList technologies={category.technologies} />
        </div>
      ))}
    </div>

    <blockquote className="pt-8 font-medium text-muted-foreground italic">
      &ldquo;I believe we, as engineers, aren&apos;t defined by the technologies
      we know today, but by our ability to learn, adapt, and choose the right
      tools for the problem.&rdquo;
    </blockquote>
  </div>
);

export default Skills;
