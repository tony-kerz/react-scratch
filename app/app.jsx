import 'materialize-css/bin/materialize.css'
import './app.scss'

import React from 'react'
import Main from './main'
import 'materialize-css/bin/materialize'
import $ from 'jquery'

React.render(
  <Main/>,
  $('#content')[0]
)
