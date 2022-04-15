import Modal from './Modal'
import Navlinks from '../header/Navlinks'
import { useGlobalContext } from '../../context/Context'

const Sidemenu = () => {
  const { isShowSidemenu } = useGlobalContext()

  return (
    <Modal>
      <div
        className={`absolute inset-y-0 right-0 z-10 w-2/3 transition-all duration-700 ease-in-out ${
          isShowSidemenu
            ? '[clip-path:circle(150%_at_calc(100%-16px)_16px)]'
            : '[clip-path:circle(0%_at_calc(100%-16px)_16px)]'
        }`}
      >
        <div className="h-full w-full bg-skin-primary p-4 pt-16 text-skin-secondary dark:bg-dark-primary dark:text-dark-secondary">
          <Navlinks />
        </div>
      </div>
    </Modal>
  )
}

export default Sidemenu
