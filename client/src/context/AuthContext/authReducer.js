const authReducer = (state,action) => {
  switch(action.type){
    case 'INIT_USER':
    case 'LOGIN':
      return {
        ...state,
        user: action.user,
        isAuthenticated: action.isAuthenticated
      }
    case 'LOGOUT':
      return {
        ...state,
        user: {},
        isAuthenticated: false
      }
    case 'EDIT_USER':
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}

export default authReducer