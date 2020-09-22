import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ForgotPassword, Login, MainApp, Register, ResetPassword } from '../pages'
import NoAuthRoute from './NoAuthRoute'
import PrivateRoute from './PrivateRoute'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <NoAuthRoute path='/forgot-password' component={ForgotPassword}/>
        <NoAuthRoute path='/login' component={Login}/>
        <NoAuthRoute path='/register' component={Register}/>
        <NoAuthRoute path='/reset-password' component={ResetPassword}/>
        <PrivateRoute path='/' component={MainApp}/>
      </Switch>
    </Router>
  )
}

export default Routes
