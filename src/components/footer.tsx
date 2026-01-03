import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground font-mono">
      <div className="container mx-auto flex flex-col justify-between gap-4 px-4 py-8 md:flex-row md:px-8">
        <div>
          <h2 className="font-sans">Naing</h2>
          <p className="mb-4 font-sans">{siteConfig.email}</p>
          <p className="text-xs sm:text-sm md:text-base">
            &copy; 2025 Naing Htet Linn. All rights reserved.
          </p>
        </div>

        <aside>
          <h6 className="text-secondary-foreground/70 mb-2 font-sans font-medium">
            Contact
          </h6>
          <ul className="text-sm md:text-base">
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
          </ul>
        </aside>

        <aside>
          <h6 className="text-secondary-foreground/70 mb-2 font-sans font-medium">
            Navigation
          </h6>
          <ul className="text-sm md:text-base">
            <li className="hover:text-primary transition-all duration-300">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-primary transition-all duration-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-primary transition-all duration-300">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-primary transition-all duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </aside>
      </div>
    </footer>
  );
};
