import { actions } from './Context'

const reducer = (state, action) => {
  if (action.type === actions.TOGGLE_SIDEMENU) {
    return { ...state, isShowSidemenu: !state.isShowSidemenu }
  }
  if (action.type === actions.CLOSE_SIDEMENU) {
    return { ...state, isShowSidemenu: false }
  }
  if (action.type === actions.CHANGE_THEME) {
    return { ...state, theme: action.theme }
  }
  return state
}

export default reducer
