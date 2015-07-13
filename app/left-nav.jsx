import React, {Component} from 'react'
import MuiLeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menu/menu-item'
import CardHeader from 'material-ui/lib/card/card-header'
import Avatar from 'material-ui/lib/avatar'

class LeftNav extends Component {

  toggle() {
    this.refs.leftNav.toggle()
  }

  render() {
    let menuItems = [
      { route: 'get-started', text: 'Get Started' },
      { route: 'customization', text: 'Customization' },
      { route: 'components', text: 'Components' },
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://github.com/callemall/material-ui',
         text: 'GitHub'
      },
      {
         text: 'Disabled',
         disabled: true
      },
      {
         type: MenuItem.Types.LINK,
         payload: 'https://www.google.com',
         text: 'Disabled Link',
         disabled: true
      },
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
              <Avatar>A</Avatar>
            }
          />
        }
      />
    )
  }
}

export default LeftNav
