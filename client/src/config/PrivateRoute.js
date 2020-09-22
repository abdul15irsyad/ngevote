import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext/authContext'

const PrivateRoute = ({component:Component,...rest}) => {
  const { auth } = useContext(AuthContext)
  const { isAuthenticated } = auth
  if(isAuthenticated===undefined) return false
  return (
    <Route {...rest} render={props => isAuthenticated ? <Component {...props}/> : <Redirect to={{pathname:'/login'}}/> }/>
  )
}

export default PrivateRoute
