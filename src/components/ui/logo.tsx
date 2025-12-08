export const Logo = () => {
  return (
    <div className="group relative inline-flex items-center p-2">
      <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 transition-all duration-200 group-hover:h-full group-hover:w-full" />

      <h1 className="bg-[linear-gradient(to_right,var(--primary)_50%,var(--foreground)_50%)] bg-size-[200%_100%] bg-clip-text bg-position-[100%_0] text-2xl font-bold text-transparent transition-[background-position] duration-500 ease-in-out group-hover:bg-position-[0_0]">
        Naing
      </h1>

      <div className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 transition-all duration-200 group-hover:h-full group-hover:w-full" />
    </div>
  );
};
