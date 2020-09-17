import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../../components'
import VoteNow from '../VoteNow'
import Home from '../Home'
import Profile from '../Profile'
import './main-app.scss'

const MainApp = () => {
  const menus = [
    {label: 'Vote Now',link: '/vote-now'},
    {label: 'Rules',link: '/rules'},
  ]
  const user = {username: 'abdulirsyad'}
  
  return (
    <div className='main-app'>
      <div className='header-wrapper'>
        <Header title='Ngevote' menus={menus} user={user}/>
      </div>
      <div className='content-wrapper'>
        <Switch>
          <Route exact path='/vote-now' component={VoteNow}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
      <div className='footer-wrapper'>
        <Footer/>
      </div>
    </div>
  )
}

export default MainApp
