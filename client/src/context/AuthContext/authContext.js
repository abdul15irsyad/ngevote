import axios from 'axios'
import React, { createContext, useEffect, useReducer } from 'react'
import authReducer from './authReducer'
import { ROOT_API } from '../../config/api-config.js'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [auth, dispatch] = useReducer(authReducer,{
    isAuthenticated: undefined,
    user: {}
  })
  useEffect(()=>{
    const userToken = localStorage.getItem('token') || ''
    axios.get(ROOT_API+'/auth',{ headers:{ 'x-auth-token': userToken }})
      .then(res=>{
        dispatch({type:'INIT_USER', user:res.data.data, isAuthenticated: true})
      })
      .catch(err=>{
        dispatch({type:'INIT_USER',user:{}, isAuthenticated: false})
        localStorage.removeItem('token')
        console.log(auth)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <AuthContext.Provider value={{auth,dispatch}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
