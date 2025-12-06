import { motion } from "motion/react";
import Image from "next/image";

export const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <motion.svg
      className={className}
      width="95"
      height="62"
      viewBox="0 0 95 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: 2 }}
      animate={{
        rotate: [2, 3, 0, 2],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <path
        d="M14.7705 15.8619C33.2146 15.2843 72.0772 22.1597 79.9754 54.2825"
        stroke="white"
        strokeWidth={3}
      />
      <path
        d="M17.7987 7.81217C18.0393 11.5987 16.4421 15.8467 15.5055 19.282C15.2179 20.3369 14.9203 21.3791 14.5871 22.4078C14.4728 22.7608 14.074 22.8153 13.9187 23.136C13.5641 23.8683 12.0906 22.7958 11.7114 22.5416C8.63713 20.4812 5.49156 18.3863 2.58664 15.9321C1.05261 14.6361 2.32549 14.1125 3.42136 13.0646C4.37585 12.152 5.13317 11.3811 6.22467 10.7447C8.97946 9.13838 12.7454 8.32946 15.8379 8.01289"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export const Profile = () => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="aspect-square w-60 lg:w-72 xl:w-96">
        <Image src={"/profile.png"} alt="my profile photo" fill />
      </div>

      <div className="absolute top-12 left-5 lg:top-16 lg:left-6 xl:top-24 xl:left-8">
        <span className="-mb-2 -ml-2.5 block w-fit -rotate-2 rounded bg-slate-200 px-1.5 py-0.5 text-xs text-black shadow xl:mb-0">
          Focus
        </span>
        <ArrowIcon className="w-12 rotate-180 lg:w-16 xl:w-20" />
      </div>

      <div className="absolute top-26 right-1 lg:top-32 lg:right-4 xl:top-42 xl:right-8">
        <span className="-mb-3 -ml-3 block w-fit -rotate-2 rounded bg-slate-200 px-1.5 py-0.5 text-xs text-black shadow lg:-mb-2 xl:mb-0 xl:ml-2">
          Resilience
        </span>
        <ArrowIcon className="w-12 scale-x-[-1] -rotate-180 lg:w-16 xl:w-20" />
      </div>

      <div className="absolute top-8 right-2 lg:top-12 lg:right-6 xl:top-20 xl:right-10">
        <span className="-mb-2 ml-5 block w-fit -rotate-2 rounded bg-slate-200 px-1.5 py-0.5 text-xs text-black shadow xl:mb-0 xl:ml-8">
          Vision
        </span>
        <ArrowIcon className="w-12 scale-x-[-1] -rotate-180 lg:w-16 xl:w-20" />
      </div>
    </div>
  );
};
