import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const COURSEWORK = [
  "Data Structures & Algorithms",
  "Database Management System",
  "Operating Systems",
  "Advanced Computer Networks",
  "Software Engineering",
  "Object Oriented Programming",
  "Programming Languages",
];

const PROJECTS = [
  {
    year: "2nd Year",
    title: "Healthier",
    role: "Team Lead · 7 members",
    description:
      "BMI calculator and interactive body organ explorer. Led a 7-member team to design and ship the web app, including an anatomy diagram where users can click organs to learn more.",
  },
  {
    year: "4th Year",
    title: "Student Registration System",
    role: "Project Manager & Lead Developer · 2 members",
    description:
      "Made key architectural decisions across user flow, admin flow, registration flow, and security — all of which directly shaped the outcome of the project. Handled UI/UX, frontend, backend, and database design end-to-end.",
  },
  {
    year: "5th Year",
    title: "Smart Tea Mixer Machine",
    role: "Team Lead · 7 members",
    description:
      "IoT tea mixer controlled via a React Native app over ESP32. Built an AI streaming server that delivers personalised tea suggestions based on user preferences.",
  },
];

export const Education = () => {
  return (
    <section className="space-y-6 px-4 py-8 md:px-8">
      <h2>Education</h2>

      <article>
        <h3 className="mb-1.5">Technological University (Taunggyi)</h3>
        <h4 className="text-foreground">
          Bachelor of Engineering in Information Technology
        </h4>
        <p className="text-sm leading-tight">2021 - Present</p>

        <div className="mt-8 mb-4 flex items-center gap-4 md:gap-6">
          <h5 className="bg-secondary text-secondary-foreground p-2">
            Relevant Coursework
          </h5>
          <div className="bg-border h-px flex-1"></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {COURSEWORK.map((item) => (
            <Badge
              key={item}
              variant={"outline"}
              className="gap-2 px-4 py-2 font-mono text-xs lg:text-sm"
            >
              {item}
            </Badge>
          ))}
        </div>

        <div className="mt-8 mb-4 flex items-center gap-4 md:gap-6">
          <h5 className="bg-secondary text-secondary-foreground p-2">
            Academic Projects &amp; Leadership
          </h5>
          <div className="bg-border h-px flex-1"></div>
        </div>
        <div className="divide-border divide-y">
          {PROJECTS.map((project, i) => (
            <div
              key={project.year}
              className={cn(
                "grid grid-cols-[5rem_1fr] gap-x-6 pt-4 pb-4 md:grid-cols-[6rem_1fr]",
                i === 0 && "pt-0",
                i === PROJECTS.length - 1 && "pb-0",
              )}
            >
              <div>
                <p className="font-mono text-xs">{project.year}</p>
              </div>
              <div>
                <p className="text-sm font-semibold">{project.title}</p>
                <p className="mt-0.5 text-xs">{project.role}</p>
                <p className="text-foreground/80 mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
