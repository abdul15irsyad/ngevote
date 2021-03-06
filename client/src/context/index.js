import React from 'react'
import AuthContextProvider from "./AuthContext/authContext"

const ContextProvider = (props) => {
  return (
    <AuthContextProvider>
      {props.children}
    </AuthContextProvider>
  )
}

export default ContextProvider
