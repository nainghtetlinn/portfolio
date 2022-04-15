import { useEffect } from 'react'
import { useGlobalContext } from '../../context/Context'

const ToggleSidemenu = () => {
  const { isShowSidemenu, toggleSidemenu } = useGlobalContext()

  useEffect(() => {
    if (isShowSidemenu) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isShowSidemenu])

  return (
    <button
      onClick={toggleSidemenu}
      className="flex h-8 w-7 flex-col items-end justify-evenly focus:outline-none md:hidden"
    >
      <span
        className={`inline-block h-[3px] origin-right rounded-full bg-skin-highlight transition-all duration-300 ease-in-out dark:bg-dark-highlight ${
          isShowSidemenu ? 'w-full -translate-y-[1px] -rotate-45' : 'w-1/2'
        }`}
      ></span>
      <span
        className={`inline-block h-[3px] origin-right self-start rounded-full bg-skin-highlight transition-all duration-300 ease-in-out dark:bg-dark-highlight ${
          isShowSidemenu ? 'w-0 -rotate-45' : 'w-full'
        }`}
      ></span>
      <span
        className={`inline-block h-[3px] origin-right rounded-full bg-skin-highlight transition-all duration-300 ease-in-out dark:bg-dark-highlight ${
          isShowSidemenu ? 'w-full translate-y-[1px] rotate-45' : 'w-2/3'
        }`}
      ></span>
    </button>
  )
}

export default ToggleSidemenu
