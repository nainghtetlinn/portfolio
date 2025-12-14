import { Frame } from "@/components/frame";
import { Lego } from "./lego";

export const Bio = () => {
  return (
    <section className="relative lg:flex lg:items-center lg:gap-8">
      <article className="max-w-4xl space-y-2 pl-4 font-mono leading-6 md:pl-8 lg:leading-8">
        <p>
          Hello! I&apos;m Naing Htet Linn, a full-stack web developer and React
          Native developer with a strong foundation in building responsive,
          scalable applications. My journey in software development began with a
          curiosity about how the apps on our everyday devices work.
        </p>
        <p>
          I work across the full stack using technologies like TypeScript,
          React, Next.js, Express, NestJS, React Native, MongoDB, PostgreSQL,
          and Spring Boot, and I enjoy designing applications from backend
          architecture to polished user interfaces.
        </p>
        <p>
          Outside of development, I love experimenting with Arduino projects,
          playing volleyball, badminton, and chess, and enjoying a cup of black
          coffee while exploring new technologies.
        </p>
      </article>

      <div className="flex items-center justify-center">
        <Frame className="w-full max-w-[350px] p-2">
          <Lego className="aspect-square w-full" />
        </Frame>
      </div>
    </section>
  );
};
