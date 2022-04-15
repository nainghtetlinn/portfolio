const HomeLeft = () => {
  return (
    <div className="mx-auto mt-8 flex h-full w-64 flex-col items-start justify-center sm:mt-0 sm:w-auto">
      <h4 className="md:mb-2">Hey, I'm</h4>
      <h1 className="animate-text bg-gradient-to-r from-highlight via-[#ccd6f6] to-highlight-dark bg-300 bg-clip-text text-transparent">
        Naing Htet Linn
      </h1>
      <h6 className="my-6">
        A passionate{' '}
        <span className="text-skin-primary dark:text-dark-primary">
          frontend developer
        </span>{' '}
        from&#160;Myanmar
      </h6>
      <button className="btn-hire relative px-5 py-1 font-semibold text-skin-primary dark:text-dark-primary">
        Contact me
      </button>
    </div>
  )
}

export default HomeLeft
