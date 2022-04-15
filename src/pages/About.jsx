import { useRef } from 'react';

import AboutLeft from '../components/about/AboutLeft';
import AboutRight from '../components/about/AboutRight';

import useIntersection from '../hooks/useIntersection';

const About = () => {
  const aboutRef = useRef();
  const inViewport = useIntersection(aboutRef, '-300px 0px');

  return (
    <section
      id="about"
      className="bg-skin-secondary [clip-path:polygon(0_10vw,100%_0,100%_calc(100%-10vw),0%_100%)] dark:bg-dark-secondary"
    >
      <div className="container mx-auto flex min-h-[100vh] flex-col items-center justify-center overflow-hidden">
        <h3 className="mb-8">Who I am?</h3>
        <div
          ref={aboutRef}
          className={`transition-all duration-1000 sm:px-4 ${
            inViewport ? '' : '-translate-y-8 opacity-0'
          }`}
        >
          <div className="max-w-3xl overflow-hidden rounded bg-skin-primary p-4 dark:bg-dark-primary sm:p-0">
            <AboutLeft />
            <AboutRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
