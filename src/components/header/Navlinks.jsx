import ToggleDark from '../toggle/ToggleDark'
import { useGlobalContext } from '../../context/Context'

const Navlinks = () => {
  const navLinks = ['about', 'services', 'projects', 'contact']

  const { closeSidemenu } = useGlobalContext()

  return (
    <ul className="flex flex-col md:flex-row md:items-center md:space-x-4">
      {navLinks.map(link => {
        return (
          <li key={link}>
            <a
              href={`#${link}`}
              onClick={closeSidemenu}
              className="inline-block rounded py-4 capitalize"
            >
              {link}
            </a>
          </li>
        )
      })}
      <li className="mt-4 border-t border-t-gray-300 pt-8 md:mt-0 md:border-0 md:pt-0">
        <ToggleDark />
      </li>
    </ul>
  )
}

export default Navlinks
