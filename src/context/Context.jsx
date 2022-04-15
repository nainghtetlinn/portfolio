import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

const initialState = {
  isShowSidemenu: false,
  theme: null,
}

export const actions = {
  TOGGLE_SIDEMENU: 'TOGGLE_SIDEMENU',
  CLOSE_SIDEMENU: 'CLOSE_SIDEMENU',
  CHANGE_THEME: 'CHANGE_THEME',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleSidemenu = () => {
    dispatch({ type: actions.TOGGLE_SIDEMENU })
  }
  const closeSidemenu = () => {
    dispatch({ type: actions.CLOSE_SIDEMENU })
  }
  const changeTheme = theme => {
    dispatch({ type: actions.CHANGE_THEME, theme })
  }

  // light mode dark mode
  useEffect(() => {
    const localTheme = localStorage.getItem('theme')

    if (localTheme) {
      if (localTheme === 'light') {
        changeTheme('light')
        document.documentElement.classList.remove('dark')
      }
      if (localTheme === 'dark') {
        changeTheme('dark')
        document.documentElement.classList.add('dark')
      }
      if (localTheme === 'system') {
        changeTheme('system')
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    } else {
      changeTheme('system')
      localStorage.setItem('theme', 'system')
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [])

  useEffect(() => {
    if (state.theme === 'dark') {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
    if (state.theme === 'light') {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
    if (state.theme === 'system') {
      localStorage.setItem('theme', 'system')
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [state.theme])

  return (
    <AppContext.Provider
      value={{ ...state, toggleSidemenu, closeSidemenu, changeTheme }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
