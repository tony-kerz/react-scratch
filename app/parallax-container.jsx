import React, {Component} from 'react'
import $ from 'jquery'

class ParallaxContainer extends Component {
  componentDidMount() {
    $('.parallax').parallax()
  }

  render() {
    return(
      <div className="parallax-container valign-wrapper">
        {this.props.children}
        <div className="parallax"><img src={this.props.imageUrl} alt="background" /></div>
      </div>
    )
  }
}

export default ParallaxContainer
