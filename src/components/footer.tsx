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
            <li>
              <a
                href={siteConfig.github}
                className="hover:text-primary transition-all duration-300"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href={siteConfig.twitter}
                className="hover:text-primary transition-all duration-300"
              >
                X
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                className="hover:text-primary transition-all duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={siteConfig.telegram}
                className="hover:text-primary transition-all duration-300"
              >
                Telegram
              </a>
            </li>
          </ul>
        </aside>

        <aside>
          <h6 className="text-secondary-foreground/70 mb-2 font-sans font-medium">
            Navigation
          </h6>
          <ul className="text-sm md:text-base">
            <li>
              <a
                href="#home"
                className="hover:text-primary transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-primary transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-primary transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </footer>
  );
};
