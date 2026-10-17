import { Frame } from "@/components/frame";
import Image from "next/image";

export const Bio = () => {
  return (
    <section className="relative lg:flex lg:items-center">
      <article className="max-w-4xl px-4 md:px-8">
        <p className="text-foreground/80 text-justify">
          &gt; Hello! I&apos;m Naing Htet Linn, a full-stack web developer and
          React Native developer with a strong foundation in building
          responsive, scalable applications. My journey in software development
          began with a curiosity about how the apps on our everyday devices
          work. <br />
          &gt; I work across the full-stack using technologies like TypeScript,
          React, Next.js, Express, NestJS, React Native, MongoDB, PostgreSQL,
          and Spring Boot, and I enjoy designing applications from backend
          architecture to polished user interfaces. <br />
          &gt; Outside of development, I love experimenting with Arduino
          projects, playing volleyball, badminton, and chess, and enjoying a cup
          of black coffee while exploring new technologies.
        </p>
      </article>

      <div className="mt-4 flex items-center justify-center p-4 lg:mt-0">
        <Frame className="relative aspect-square w-68 lg:w-78">
          <Image
            src={"/bio_photo.webp"}
            alt="low poly style profile photo"
            fill
            sizes="(max-width: 1024px) 272px, 312px"
            className="object-cover"
            loading="lazy"
          />
        </Frame>
      </div>
    </section>
  );
};
