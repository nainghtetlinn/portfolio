const ContactForm = () => {
  return (
    <div className="mt-8 w-full">
      <div className="mx-auto md:w-2/3 lg:w-1/2">
        <div className="-m-2 flex flex-wrap">
          <div className="relative w-full p-2 sm:w-1/2">
            <label htmlFor="name" className="text-sm leading-7">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-highlight bg-skin-secondary bg-opacity-50 py-1 px-3 text-base leading-8 text-skin-secondary outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-highlight dark:border-highlight-dark dark:bg-dark-accent dark:text-dark-secondary dark:focus:bg-dark-primary dark:focus:ring-highlight-dark"
            />
          </div>
          <div className="relative w-full p-2 sm:w-1/2">
            <label htmlFor="email" className="text-sm leading-7">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full rounded border border-highlight bg-skin-secondary bg-opacity-50 py-1 px-3 text-base leading-8 text-skin-secondary outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-highlight dark:border-highlight-dark dark:bg-dark-accent dark:text-dark-secondary dark:focus:bg-dark-primary dark:focus:ring-highlight-dark"
            />
          </div>
          <div className="relative w-full p-2">
            <label htmlFor="message" className="text-sm leading-7">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="h-32 w-full rounded border border-highlight bg-skin-secondary bg-opacity-50 py-1 px-3 text-base leading-8 text-skin-secondary outline-none transition-colors duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-highlight dark:border-highlight-dark dark:bg-dark-accent dark:text-dark-secondary dark:focus:bg-dark-primary dark:focus:ring-highlight-dark"
            ></textarea>
          </div>
          <div className="w-full p-2">
            <button className="text- mx-auto flex rounded border-0 bg-skin-highlight py-2 px-8 text-lg text-white hover:bg-skin-accent hover:text-highlight focus:outline-none dark:bg-dark-highlight dark:text-black dark:hover:bg-dark-accent dark:hover:text-highlight-dark">
              Sent Message
            </button>
          </div>
          <div className="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center">
            <a className="text-skin-secondary dark:text-dark-secondary">
              example@email.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
