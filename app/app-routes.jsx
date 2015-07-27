import React from 'react'
import {Route, DefaultRoute} from 'react-router'
import Main from './main'
import Home from './home'
import Stuff from './stuff'
import OtherStuff from './other-stuff'
import MoreStuff from './more-stuff'
import SignUp from './sign-up'
import SignIn from './sign-in'

let AppRoutes = (
  <Route handler={Main}>
    <Route name="home" handler={Home} />
    <DefaultRoute name='stuff' handler={Stuff}/>
    <Route name="other-stuff" handler={OtherStuff} />
    <Route name="more-stuff" handler={MoreStuff} />
    <Route name="sign-in" handler={SignIn} />
    <Route name="sign-up" handler={SignUp} />
  </Route>
)

export default AppRoutes
