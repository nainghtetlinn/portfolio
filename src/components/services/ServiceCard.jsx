import { useRef } from 'react';

import useIntersection from '../../hooks/useIntersection';

const ServiceCard = ({ s }) => {
  const ref = useRef();
  const isVisible = useIntersection(ref, '-150px 0px');

  return (
    <article
      ref={ref}
      className={`rounded bg-skin-secondary p-4 shadow shadow-highlight transition-card duration-500 hover:scale-[1.02] hover:shadow-md dark:bg-dark-secondary dark:shadow-highlight-dark ${
        isVisible ? '' : 'translate-x-8 opacity-0'
      }`}
    >
      <h5 className="mb-4 flex items-center">
        {s.icon}
        {s.label}
      </h5>
      <p className="text-skin-accent dark:text-dark-accent">{s.text}</p>
    </article>
  );
};

export default ServiceCard;
