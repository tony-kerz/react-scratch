import React, {Component} from 'react'
import MuiLeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menu/menu-item'
import CardHeader from 'material-ui/lib/card/card-header'
import ClickableAvatar from './clickable-avatar'

class LeftNav extends Component {

  render() {
    let menuItems = [
      { route: 'home', text: 'Home' },
      { route: 'sign-in', text: 'Sign In' },
      { route: 'sign-up', text: 'Sign Up' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/tony-kerz/react-scratch',
         text: 'GitHub'
      }
    ]

    return(
      <MuiLeftNav
        ref="leftNav"
        docked={false}
        menuItems={menuItems}
        header={
          <CardHeader
            title="Title"
            subtitle="Subtitle"
            avatar={
              <ClickableAvatar
                onClick={this._onNavHeaderClick}
              >
                A
              </ClickableAvatar>
            }
          />
        }
        onChange={this._onLeftNavChange}
      />
    )
  }

  toggle() {
    this.refs.leftNav.toggle()
  }

  _onLeftNavChange = (e, key, payload) => {
    console.log('left-nav: olnc: e=%o, key=%o, payload=%o', e, key, payload)
    this.context.router.transitionTo(payload.route)
  }

  _onNavHeaderClick = () => {
    console.log('left-nav: ohc')
    this.context.router.transitionTo('home')
    this.refs.leftNav.close()
  }

  static contextTypes = {
    router: React.PropTypes.func
  }
}

export default LeftNav
