import React, {Component} from 'react'

class Section extends Component {
  render() {
    return(
      <div className="container">
        <div className="section">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section
