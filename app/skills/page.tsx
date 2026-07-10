import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Technology {
  name: string;
  logo?: string;
  logoClassName?: string;
}

interface SkillCategory {
  label: string;
  technologies: Technology[];
}

const PRIMARY_STACK: Technology[] = [
  { name: "TypeScript", logo: "/tech-logo/typescript.svg" },
  { name: "Next.js", logo: "/tech-logo/nextjs.svg" },
  { name: "Bun", logo: "/tech-logo/bun.svg" },
  { name: "PostgreSQL", logo: "/tech-logo/postgres.svg" },
  { name: "MongoDB", logo: "/tech-logo/mongodb.svg", logoClassName: "w-5 h-5" },
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Core",
    technologies: [
      { name: "TypeScript", logo: "/tech-logo/typescript.svg" },
      { name: "JavaScript", logo: "/tech-logo/javascript.svg" },
      { name: "HTML", logo: "/tech-logo/html.svg" },
      { name: "CSS", logo: "/tech-logo/css.svg" },
    ],
  },
  {
    label: "Frontend",
    technologies: [
      { name: "React", logo: "/tech-logo/react.svg" },
      { name: "Next.js", logo: "/tech-logo/nextjs.svg" },
      { name: "Shadcn/UI", logo: "/tech-logo/shadcn.svg" },
      { name: "Tailwind CSS", logo: "/tech-logo/tailwind.svg" },
    ],
  },
  {
    label: "Backend",
    technologies: [
      { name: "Node.js", logo: "/tech-logo/nodejs.svg" },
      { name: "Express", logo: "/tech-logo/express.svg" },
      { name: "Bun", logo: "/tech-logo/bun.svg" },
      { name: "Hono", logo: "/tech-logo/hono.svg" },
      { name: "REST", logo: "/tech-logo/rest.svg" },
      { name: "tRPC", logo: "/tech-logo/trpc.svg" },
      { name: "BullMQ", logo: "/tech-logo/bullmq.svg", logoClassName: "w-6 h-6" },
      { name: "WebSocket", logo: "/tech-logo/websocket.svg" },
    ],
  },
  {
    label: "Database",
    technologies: [
      { name: "PostgreSQL", logo: "/tech-logo/postgres.svg" },
      { name: "MongoDB", logo: "/tech-logo/mongodb.svg", logoClassName: "w-6 h-6" },
      { name: "Redis", logo: "/tech-logo/redis.svg" },
      { name: "Drizzle ORM", logo: "/tech-logo/drizzle-orm.svg" },
      { name: "Prisma ORM", logo: "/tech-logo/prisma.svg", logoClassName: "w-6 h-6" },
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
      { name: "Docker", logo: "/tech-logo/docker.svg", logoClassName: "w-6 h-6" },
      { name: "Vercel", logo: "/tech-logo/vercel.svg" },
      { name: "Linux", logo: "/tech-logo/ubuntu.svg", logoClassName:"w-6 h-6" },
      { name: "AWS", logo: "/tech-logo/aws.svg", logoClassName: "w-6 h-6" },
    ],
  },
  {
    label: "Tools & Frameworks",
    technologies: [
      { name: "Zed" },
      { name: "Git", logo: "/tech-logo/git.svg" },
      { name: "Postman", logo: "/tech-logo/postman.svg" },
      { name: "Pnpm", logo: "/tech-logo/pnpm.svg", logoClassName: "w-6 h-6" },
      { name: "VS Code", logo: "/tech-logo/vscode.svg" },
      { name: "Turborepo", logo: "/tech-logo/turborepo.svg", logoClassName: "w-6 h-6" },
      { name: "Figma", logo: "/tech-logo/figma.svg" },
      { name: "Better-Auth", logo: "/tech-logo/better-auth.svg" },
      { name: "Zod", logo: "/tech-logo/zod.svg", logoClassName: "h-6 w-6" },
    ],
  },
];

function TechnologyBadge({ name, logo, logoClassName }: Technology) {
  return (
    <Badge variant="outline" className="border-dotted px-2 py-3 text-xs text-primary">
      {logo && (
        <Image
          src={logo}
          alt={`${name} logo`}
          width={16}
          height={16}
          className={cn("h-4 w-4", logoClassName)}
        />
      )}
      {name}
    </Badge>
  );
}

function TechnologyBadgeList({ technologies }: { technologies: Technology[] }) {
  return (
    <div className="flex flex-wrap gap-3 mt-1">
      {technologies.map((tech) => (
        <TechnologyBadge key={tech.name} {...tech} />
      ))}
    </div>
  );
}

const Skills = () => {
  return (
    <div className="mt-4 px-2">
      <h3 className="text-xl font-semibold">Skills & Toolkit</h3>
      <p className="text-muted-foreground text-sm font-medium mt-1">
        The technologies and tools I use to turn ideas into reliable software.
      </p>

      <p className="text-muted-foreground pt-4 font-medium">
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

      <div className="text-muted-foreground pt-4 font-medium space-y-4">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.label}>
            <p className="font text-sm">&lt;/{category.label}&gt;</p>
            <TechnologyBadgeList technologies={category.technologies} />
          </div>
        ))}
      </div>

      <blockquote className="pt-8 italic text-muted-foreground font-medium">
        &ldquo;I believe we, as engineers, aren&apos;t defined by the technologies we
        know today, but by our ability to learn, adapt, and choose the right tools
        for the problem.&rdquo;
      </blockquote>
    </div>
  );
};

export default Skills;