import gueess from '../assets/gueess.png';
import target_within from '../assets/target_within.png';
import great_quotes from '../assets/great_quotes.png';
import space_tourism from '../assets/space_tourism.png';

import ProjectCard from '../components/projects/ProjectCard';

const projects = [
  {
    id: 'p1',
    name: 'gueess',
    description: 'A guessing game for hidden number.',
    url: 'https://gueess.vercel.app/',
    img: gueess,
    technology: ['NextJs', 'Tailwindcss', 'Redux'],
  },
  {
    id: 'p2',
    name: 'target within',
    description: 'Set your goal and see your progress.',
    url: 'https://target-within.vercel.app/',
    img: target_within,
    technology: ['NextJs', 'Tailwindcss', 'Context-api'],
  },
  {
    id: 'p3',
    name: 'great quotes',
    description: 'Stay everyday motivated from other quotes.',
    url: 'https://quotes-rrd-v6.netlify.app/',
    img: great_quotes,
    technology: ['ReactJs', 'Firebase', 'Context-api', 'React-router-dom V6'],
  },
  {
    id: 'p4',
    name: 'space tourism',
    description: 'To infinity and beyond.',
    url: 'https://react-space-tourism-by-naing.netlify.app/',
    img: space_tourism,
    technology: ['ReactJs', 'React-router-dom V6'],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-8">
        <h3 className="mb-8">Projects</h3>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <ProjectCard p={p} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
