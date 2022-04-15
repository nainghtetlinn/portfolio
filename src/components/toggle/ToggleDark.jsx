import { useState } from 'react'
import { BsMoonStarsFill, BsCaretDownFill } from 'react-icons/bs'

import { useGlobalContext } from '../../context/Context'

const ToggleDark = () => {
  const themes = ['light', 'dark', 'system']
  const [isDarkContainerOpen, setIsDarkContainerOpen] = useState(false)
  const { theme, changeTheme } = useGlobalContext()

  const toggleDarkContainerHandler = () => {
    setIsDarkContainerOpen(!isDarkContainerOpen)
  }

  const changeThemeHandler = th => {
    changeTheme(th)
    setIsDarkContainerOpen(false)
  }

  return (
    <div className="relative mx-auto max-w-xs">
      <div
        onClick={toggleDarkContainerHandler}
        className="flex cursor-pointer items-center justify-between rounded bg-skin-secondary p-3 capitalize text-skin-secondary hover:bg-skin-accent dark:bg-dark-secondary dark:text-dark-secondary dark:hover:bg-dark-accent"
      >
        <span>
          <BsMoonStarsFill />
        </span>
        <span className="md:hidden">{theme}</span>
        <span className="md:hidden">
          <BsCaretDownFill />
        </span>
      </div>
      {isDarkContainerOpen && (
        <div className="absolute top-[120%] right-0 w-full overflow-hidden rounded bg-skin-secondary text-skin-secondary dark:bg-dark-secondary dark:text-dark-secondary md:right-0 md:min-w-fit">
          <ul>
            {themes.map(tm => (
              <li
                key={tm}
                onClick={() => changeThemeHandler(tm)}
                className={`cursor-pointer p-3 capitalize hover:bg-skin-accent dark:hover:bg-dark-accent ${
                  tm === theme ? 'bg-skin-accent dark:bg-dark-accent' : ''
                }`}
              >
                {tm}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ToggleDark
