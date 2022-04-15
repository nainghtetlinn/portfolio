const Marquee = ({ direction = 'left', items }) => {
  return (
    <div className="relative my-12 flex h-36 w-full items-center overflow-hidden bg-skin-secondary shadow-inner shadow-slate-400 dark:bg-dark-secondary md:h-48">
      <div
        className={`absolute flex w-[200%] ${
          direction === 'left' ? 'animate-marquee' : 'animate-marqueeRev'
        }`}
      >
        <span className="flex w-1/2 items-center justify-around">
          {items.map(s => (
            <div key={s.id} className="w-16 md:w-24">
              <img
                className="w-full object-contain grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0"
                src={s.icon}
                alt={s.name}
              />
            </div>
          ))}
        </span>
        <span className="flex w-1/2 items-center justify-around">
          {items.map(s => (
            <div key={s.id} className="w-16 md:w-24">
              <img
                className="w-full object-contain grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0"
                src={s.icon}
                alt={s.name}
              />
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
