import { BsLink45Deg } from 'react-icons/bs';
import { useRef } from 'react';

import useIntersection from '../../hooks/useIntersection';

const ProjectCard = ({ p }) => {
  const ref = useRef();
  const isVisible = useIntersection(ref, '-150px 0px');

  const { name, description, url, img, technology } = p;
  return (
    <article
      ref={ref}
      className={`relative z-0 overflow-hidden rounded-lg bg-skin-secondary shadow shadow-highlight transition-card duration-500 hover:scale-[1.02] hover:shadow-md dark:bg-dark-secondary dark:shadow-highlight-dark ${
        isVisible ? '' : '-translate-x-8 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-[250px] md:max-w-none">
        <img
          className="relative w-full object-cover object-center"
          src={img}
          alt={name}
        />
      </div>
      <div className="px-2 py-3">
        <div>
          <h5 className="mb-4 capitalize text-skin-primary dark:text-dark-primary">
            {name}
          </h5>
          <h6>{description}</h6>
        </div>
        <div className="mt-2 flex flex-wrap">
          {technology.map((t, i) => (
            <div
              className="mb-1 mr-1 rounded-full border border-highlight px-2 text-sm dark:border-highlight-dark"
              key={i}
            >
              <span>{t}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <a href={url} target="_blank" className="flex items-center">
            View Demo <BsLink45Deg className="ml-2 text-xl" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
