import React, {Component} from 'react'
import AppBar from 'material-ui/lib/app-bar'
import LeftNav from './left-nav'
import Styles from 'material-ui/lib/styles'
import RouteHandler from 'react-router/lib/components/RouteHandler'

class Main extends Component {

  static contextTypes = {
    router: React.PropTypes.func
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: Styles.ThemeManager().getCurrentTheme()
    }
  }

  _onLeftIconButtonTouchTap = (e) => {
    this.refs.leftNav.toggle()
  }

  render() {
    return(
      <div>
        <AppBar title="React Scratch" onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap} />
        <LeftNav ref='leftNav'/>
        <RouteHandler/>
      </div>
    )
  }
}

export default Main
