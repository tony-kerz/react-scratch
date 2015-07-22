import React, {Component} from 'react'
import Avatar from 'material-ui/lib/avatar'
import Radium from 'radium'

@Radium
class ClickableAvatar extends Component {

  render() {
    return(
      <span
        onClick={this.props.onClick}
        style={styles}
      >
        <Avatar style={this.props.style}>
          {this.props.children}
        </Avatar>
      </span>
    )
  }
}

let styles = {
  ':hover': {
    cursor: 'pointer'
  }
}

export default ClickableAvatar
