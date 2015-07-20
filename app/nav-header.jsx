import React, {Component} from 'react'
import CardHeader from 'material-ui/lib/card/card-header'
import Avatar from 'material-ui/lib/avatar'
import Radium from 'radium'

@Radium
class NavHeader extends Component {

  render() {
    return(
      <div
        onClick={this.props.onClick}
        style={styles}
      >
        <CardHeader
          title="Title"
          subtitle="Subtitle"
          avatar={
            <Avatar>
              A
            </Avatar>
          }
        />
      </div>
    )
  }
}

let styles = {
  ':hover': {
    cursor: 'pointer'
  }
}

export default NavHeader
