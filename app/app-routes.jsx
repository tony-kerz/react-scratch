import React from 'react'
import Route from 'react-router/lib/components/Route'
import DefaultRoute from 'react-router/lib/components/DefaultRoute'
import Main from './main'
import Home from './home'
import SignUp from './sign-up'
import SignIn from './sign-in'

let AppRoutes = (
  <Route handler={Main}>
    <Route name="home" handler={Home} />
    <Route name="sign-in" handler={SignIn} />
    <Route name="sign-up" handler={SignUp} />
    <DefaultRoute handler={SignIn}/>
  </Route>
)

export default AppRoutes
