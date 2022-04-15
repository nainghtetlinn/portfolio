import { useGlobalContext } from '../../context/Context'

const Modal = ({ children }) => {
  const { isShowSidemenu, closeSidemenu } = useGlobalContext()

  return (
    <div
      className={`fixed inset-0 z-20 overflow-hidden md:hidden ${
        !isShowSidemenu ? 'pointer-events-none' : ''
      }`}
    >
      <div
        onClick={closeSidemenu}
        className={`relative h-full w-full bg-black/50 transition-opacity duration-300 ${
          !isShowSidemenu ? 'opacity-0' : 'opacity-1'
        }`}
      ></div>
      {children}
    </div>
  )
}

export default Modal
