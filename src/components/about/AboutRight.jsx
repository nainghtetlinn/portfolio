import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';

const AboutRight = () => {
  return (
    <div>
      <p className="mt-4 max-w-xs text-skin-secondary dark:text-dark-secondary sm:mt-16 sm:max-w-none md:mt-28">
        Hi I am Naing from Myanmar, first&#160;year student{' '}
        <a
          className="font-bold text-skin-primary dark:text-dark-primary"
          href="http://www.tutaunggyi.edu.mm/?lang=en"
          target="_blank"
        >
          @TTU
        </a>
        , I have serious passion for web development, mobile development and
        UI-design. Most of my time were gone by doing coding.
      </p>
      <ul className="mt-4 flex items-center space-x-4 md:mt-8">
        <li>
          <a
            className="inline-block text-xl transition-transform duration-300 hover:-translate-y-1 md:text-2xl"
            href="https://twitter.com/Naing_95"
            aria-label="Twitter"
          >
            <BsTwitter />
          </a>
        </li>
        <li>
          <a
            className="inline-block text-xl transition-transform duration-300 hover:-translate-y-1 md:text-2xl"
            href="https://www.linkedin.com/in/naing-htet-linn-111252228/"
            aria-label="Linked In"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            className="inline-block text-xl transition-transform duration-300 hover:-translate-y-1 md:text-2xl"
            href="https://github.com/nainghtetlinn"
            aria-label="Github"
          >
            <BsGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutRight;
