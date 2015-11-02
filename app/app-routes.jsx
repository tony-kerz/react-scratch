import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Main from './main'
import Home from './home'
import Stuff from './stuff'
import OtherStuff from './other-stuff'
import MoreStuff from './more-stuff'
import SignUp from './sign-up'
import SignIn from './sign-in'

let AppRoutes = (
  <Route path='/' component={Main}>
    <Route path='home' component={Home} />
    <IndexRoute component={Stuff}/>
    <Route path='stuff' component={Stuff} />
    <Route path='other-stuff' component={OtherStuff} />
    <Route path='more-stuff' component={MoreStuff} />
    <Route path='sign-in' component={SignIn} />
    <Route path='sign-up' component={SignUp} />
  </Route>
)

export default AppRoutes
