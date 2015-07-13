import React, {Component} from 'react'

class IconSection extends Component {
  render() {
    return(
      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className={this.props.iconClass}></i></h2>
          <h5 className="center">{this.props.header}</h5>
          <p className="light">{this.props.children}</p>
        </div>
      </div>
    )
  }
}

export default IconSection
