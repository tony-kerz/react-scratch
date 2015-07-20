import 'materialize-css/bin/materialize.css'
import './app.scss'
import React from 'react'
import 'materialize-css/bin/materialize'
import $ from 'jquery'
import TapEventPlugin from 'react-tap-event-plugin'
import Router from 'react-router'
import AppRoutes from './app-routes'

TapEventPlugin()

Router.run(
  AppRoutes,
  Router.HashLocation,
  (Root) => {
    React.render(<Root/>, $('#content')[0])
  }
)
