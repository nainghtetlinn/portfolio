import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground font-mono">
      <div className="container mx-auto grid gap-4 px-4 pt-8 pb-4 md:flex md:justify-between md:px-8 md:pb-6">
        <div className="font-sans">
          <h2>Naing</h2>
          <p className="md:mb-4">{siteConfig.email}</p>
          <p className="hidden font-mono text-base md:block">
            &copy; 2025 Naing Htet Linn. All rights reserved.
          </p>
        </div>

        <div className="flex w-full justify-between md:w-1/3">
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
      </div>

      <p className="p-4 text-center text-xs sm:text-sm md:hidden">
        &copy; 2025 Naing Htet Linn. All rights reserved.
      </p>
    </footer>
  );
};
