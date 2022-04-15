import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-skin-highlight p-2 text-white dark:bg-dark-highlight dark:text-skin-secondary"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Naing</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © 2022 Naing —
          <a
            href="https://twitter.com/Naing_95"
            className="ml-1 text-gray-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Naing_95
          </a>
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            className="text-gray-500"
            href="https://twitter.com/Naing_95"
            aria-label="Twitter"
          >
            <BsTwitter />
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/in/naing-htet-linn-111252228/"
            aria-label="Linked In"
          >
            <BsLinkedin />
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://github.com/nainghtetlinn"
            aria-label="Github"
          >
            <BsGithub />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
