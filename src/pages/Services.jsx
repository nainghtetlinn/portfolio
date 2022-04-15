import { BsCodeSlash, BsPhone, BsMoonStars, BsGear } from 'react-icons/bs';
import ServiceCard from '../components/services/ServiceCard';

const services = [
  {
    id: 's1',
    icon: (
      <BsCodeSlash className="mr-2 text-2xl text-skin-primary dark:text-dark-primary md:text-3xl" />
    ),
    label: 'Clean Code',
    text: `As I have enought experience in coding, I can write a super clean
code. In the future, when you've to hired another developer to
change your website, clean code can help the other developers to
understand the code fast.`,
  },
  {
    id: 's2',
    icon: (
      <BsPhone className="mr-2 text-2xl text-skin-primary dark:text-dark-primary md:text-3xl" />
    ),
    label: 'Fully Responsive',
    text: `Nowaday, we have different kinds of devices, so it is important to
    make sure your website is displayed in every device perfectly. And
    I can make your website will be fullly responsive for different
    devices.`,
  },
  {
    id: 's3',
    icon: (
      <BsMoonStars className="mr-2 text-2xl text-skin-primary dark:text-dark-primary md:text-3xl" />
    ),
    label: 'Dark Mode',
    text: `Dark mode is getting a must key features in every website. I can
    make the website not just in dark and light mode but also set the
    website theme according to the user's device system.`,
  },
  {
    id: 's4',
    icon: (
      <BsGear className="mr-2 text-2xl text-skin-primary dark:text-dark-primary md:text-3xl" />
    ),
    label: 'Optimization',
    text: `With many features the website may be slow to load which is bad
    for user experience but don't worry I can also make the website
    faster and smooth.`,
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-8">
        <h3 className="mb-8">Services</h3>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <ServiceCard s={s} key={s.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
