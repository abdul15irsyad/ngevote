import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../../components'
import { AuthContext } from '../../context/AuthContext/authContext'
import EditProfile from '../EditProfile'
import Home from '../Home'
import NotFound from '../NotFound'
import Profile from '../Profile'
import Rules from '../Rules'
import Settings from '../Settings'
import VoteNow from '../VoteNow'
import './main-app.scss'

const MainApp = () => {
  // state
  const { auth,dispatch } = useContext(AuthContext)
  const { user } = auth
  const logout = () => {
    localStorage.removeItem('token')
    dispatch({type:'LOGOUT'})
  }
  return (
    <div className='main-app'>
      <div className='header-wrapper sticky-top'>
        <Header title='Ngevote' user={user} logout={logout}/>
      </div>
      <div className='content-wrapper'>
        <Switch>
          <Route exact path='/profile/:username/edit' component={EditProfile}/>
          <Route exact path='/profile/:username' component={Profile}/>
          <Route exact path='/rules' component={Rules}/>
          <Route exact path='/settings' component={Settings}/>
          <Route exact path='/vote-now' component={VoteNow}/>
          <Route exact path='/' component={Home}/>
          <Route path='/*' component={NotFound} />
        </Switch>
      </div>
      <div className='footer-wrapper'>
        <Footer/>
      </div>
    </div>
  )
}

export default MainApp
