import StackIcon from "tech-stack-icons";
import { Badge } from "@/components/ui/badge";

const SKILLS = [
  {
    label: "Languages",
    items: [
      { name: "Typescript", icon: "typescript" },
      { name: "Java", icon: "java" },
      { name: "GoLang", icon: "go" },
      { name: "C++", icon: "c++" },
      { name: "Python", icon: "python" },
      { name: "PHP", icon: "php" },
    ],
  },
  {
    label: "CSS",
    items: [
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "ShadcnUI", icon: "shadcnui" },
      { name: "MaterialUi", icon: "materialui" },
      { name: "Ant Design", icon: "antd" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs2" },
      { name: "Tanstack Start", icon: "tanstack" },
      { name: "Electron", icon: "electron" },
      { name: "ReactNative", icon: "reactnative" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express" },
      { name: "Nest.js", icon: "nestjs" },
      { name: "SpringBoot", icon: "spring" },
    ],
  },
  {
    label: "Libraries",
    items: [
      { name: "Zustand", icon: "zustand" },
      { name: "Redux", icon: "redux" },
      { name: "ReactQuery", icon: "reactquery" },
      { name: "Zod", icon: "zod" },
      { name: "Three.js", icon: "threejs" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MongoDb", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
      { name: "Prisma", icon: "prisma" },
      { name: "Supabase", icon: "supabase" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    label: "Tools & Technologies",
    items: [
      { name: "Git", icon: "git" },
      { name: "Github", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
      { name: "CI/CD" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    label: "Hostings",
    items: [
      { name: "DigitalOcean", icon: "digitalocean" },
      { name: "Netlify", icon: "netlify" },
      { name: "Vercel", icon: "vercel" },
      { name: "Render", icon: "render" },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="space-y-6 px-4 pt-8 md:px-8">
      <h2 className="font-bold">Skills & Tools</h2>

      <div className="grid gap-8 font-mono md:grid-cols-2">
        {SKILLS.map((skill) => (
          <div key={skill.label} className="space-y-4">
            <h3>{skill.label}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <Badge
                  key={item.name}
                  variant={"outline"}
                  className="gap-2 px-4 py-2 text-sm font-semibold lg:text-base"
                >
                  {item.icon && (
                    <StackIcon name={item.icon} className="size-5 lg:size-6" />
                  )}
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
