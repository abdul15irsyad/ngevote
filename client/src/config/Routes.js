import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ForgotPassword, Login, MainApp, ResetPassword } from '../pages'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/forgot-password' component={ForgotPassword}/>
        <Route path='/login' component={Login}/>
        <Route path='/reset-password' component={ResetPassword}/>
        <Route path='/' component={MainApp}/>
      </Switch>
    </Router>
  )
}

export default Routes
