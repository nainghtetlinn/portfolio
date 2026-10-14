import { siteConfig } from "@/config/site";
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { RiTelegram2Line } from "react-icons/ri";

export const Contacts = () => {
  return (
    <section className="pb-6">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <li className="flex">
          <a
            href={"mailto:" + siteConfig.email}
            target="_blank"
            className="flex items-center gap-4 md:gap-6"
          >
            <LuMail className="size-6 md:size-7" />
            <div className="flex flex-col">
              <span className="font-sans text-base font-medium md:text-lg lg:text-xl xl:text-2xl">
                Email
              </span>
              <span className="text-muted-foreground font-mono underline">
                {siteConfig.email}
              </span>
            </div>
          </a>
        </li>
        <li className="flex">
          <a
            href={siteConfig.github}
            target="_blank"
            className="flex items-center gap-4 md:gap-6"
          >
            <LuGithub className="size-6 md:size-7" />
            <div className="flex flex-col">
              <span className="font-sans text-base font-medium md:text-lg lg:text-xl xl:text-2xl">
                Github
              </span>
              <span className="text-muted-foreground font-mono underline">
                nainghtetlinn
              </span>
            </div>
          </a>
        </li>
        <li className="flex">
          <a
            href={siteConfig.twitter}
            target="_blank"
            className="flex items-center gap-4 md:gap-6"
          >
            <FaXTwitter className="size-6 md:size-7" />
            <div className="flex flex-col">
              <span className="font-sans text-base font-medium md:text-lg lg:text-xl xl:text-2xl">
                X
              </span>
              <span className="text-muted-foreground font-mono underline">
                naingdev
              </span>
            </div>
          </a>
        </li>
        <li className="flex">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            className="flex items-center gap-4 md:gap-6"
          >
            <LuLinkedin className="size-6 md:size-7" />
            <div className="flex flex-col">
              <span className="font-sans text-base font-medium md:text-lg lg:text-xl xl:text-2xl">
                LinkedIn
              </span>
              <span className="text-muted-foreground font-mono underline">
                naingdev
              </span>
            </div>
          </a>
        </li>
        <li className="flex">
          <a
            href={siteConfig.telegram}
            target="_blank"
            className="flex items-center gap-4 md:gap-6"
          >
            <RiTelegram2Line className="size-6 md:size-7" />
            <div className="flex flex-col">
              <span className="font-sans text-base font-medium md:text-lg lg:text-xl xl:text-2xl">
                Telegram
              </span>
              <span className="text-muted-foreground font-mono underline">
                naing_hl
              </span>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};
