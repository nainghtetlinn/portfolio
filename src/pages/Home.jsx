import HomeLeft from '../components/home/HomeLeft';
import HomeRight from '../components/home/HomeRight';
import useIntersection from '../hooks/useIntersection';

const Home = () => {
  return (
    <section>
      <div className="container mx-auto grid min-h-[90vh] grid-cols-1 grid-rows-2 py-16 px-4 sm:grid-cols-2 sm:grid-rows-1">
        <div className="order-2  sm:order-1 lg:flex lg:justify-center">
          <HomeLeft />
        </div>
        <div className="order-1  sm:order-2">
          <HomeRight />
        </div>
      </div>
    </section>
  );
};

export default Home;
