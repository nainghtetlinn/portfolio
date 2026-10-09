import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const SKILLS = [
  {
    label: "Frontend",
    prefix: "frontend",
    items: [
      { name: "Typescript", icon: "TypeScript.svg" },
      { name: "React.js", icon: "React.svg" },
      { name: "Next.js", icon: "Next.js.svg" },
      { name: "ReactNative", icon: "React.svg" },
      { name: "TailwindCSS", icon: "Tailwind CSS.svg" },
      { name: "Redux", icon: "Redux.svg" },
    ],
  },
  {
    label: "Backend",
    prefix: "backend",
    items: [
      { name: "Node.js", icon: "Node.js.svg" },
      { name: "Express", icon: "Express.svg" },
      { name: "Nest.js", icon: "Nest.js.svg" },
      { name: "Java", icon: "Java.svg" },
      { name: "SpringBoot", icon: "Spring.svg" },
    ],
  },
  {
    label: "Database",
    prefix: "database",
    items: [
      { name: "MongoDB", icon: "MongoDB.svg" },
      { name: "PostgreSQL", icon: "PostgresSQL.svg" },
      { name: "MySQL", icon: "MySQL.svg" },
      { name: "SQLite", icon: "SQLite.svg" },
      { name: "Redis", icon: "Redis.svg" },
    ],
  },
  {
    label: "Tools & Technologies",
    prefix: "others",
    items: [
      { name: "Git", icon: "Git.svg" },
      { name: "Github", icon: "GitHub.svg" },
      { name: "Docker", icon: "Docker.svg" },
      { name: "Linux", icon: "Linux.svg" },
      { name: "CI/CD", icon: "GitHub Actions.svg" },
      { name: "DigitalOcean", icon: "Digital Ocean.svg" },
      { name: "AWS", icon: "AWS.svg" },
      { name: "GoogleCloud", icon: "Google Cloud.svg" },
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
                    <Image
                      src={`/skills/${skill.prefix}/${item.icon}`}
                      alt={`${item.name} logo`}
                      width={24}
                      height={24}
                      className="size-5 object-contain lg:size-6"
                    />
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
