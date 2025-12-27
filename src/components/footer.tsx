import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground font-mono">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-8">
        <h6 className="text-sm md:text-base">
          &copy; 2025 Naing Htet Linn. All rights reserved.
        </h6>
        <ul className="flex items-center gap-4 text-sm md:text-base">
          <li className="hover:text-primary transition-all duration-300">
            <a href={siteConfig.github}>Github</a>
          </li>
          <li className="hover:text-primary transition-all duration-300">
            <a href={siteConfig.twitter}>X</a>
          </li>
          <li className="hover:text-primary transition-all duration-300">
            <a href={siteConfig.linkedin}>LinkedIn</a>
          </li>
          <li className="hover:text-primary transition-all duration-300">
            <a href={siteConfig.telegram}>Telegram</a>
          </li>
          <li className="hover:text-primary transition-all duration-300">
            <a href={`mailto:${siteConfig.email}`}>Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
