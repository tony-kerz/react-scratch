import React, {Component} from 'react'
import {RouteHandler} from 'react-router'
import Menu from './menu'

class Main extends Component {
  render() {
    return(
      <div className='field'>
        <Menu/>
        <div className="ui main container">
          <RouteHandler/>
        </div>
      </div>
    )
  }
}

export default Main
