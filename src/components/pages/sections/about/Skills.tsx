import StackIcon from "tech-stack-icons";

const SKILLS = [
  {
    label: "Frontend",
    items: [
      { name: "Javascript", icon: "js" },
      { name: "Typescript", icon: "typescript" },
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs2" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "MaterialUi", icon: "materialui" },
    ],
  },
  {
    label: "Backend & Services",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express" },
      { name: "Nest.js", icon: "nestjs" },
      { name: "SpringBoot", icon: "spring" },
      { name: "Supabase", icon: "supabase" },
      { name: "Firebase", icon: "firebase" },
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
      { name: "Graphql", icon: "graphql" },
    ],
  },
  {
    label: "Tools & Technologies",
    items: [
      { name: "Git", icon: "git" },
      { name: "Github", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Figma", icon: "figma" },
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
            <h5 className="font-semibold lg:text-lg xl:text-xl">
              {skill.label}
            </h5>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item.name}
                  className="bg-secondary text-secondary-foreground inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold lg:text-base"
                >
                  {item.icon && (
                    <StackIcon name={item.icon} className="size-5 lg:size-6" />
                  )}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
