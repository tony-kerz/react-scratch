import React, {Component} from 'react'
import Section from './section'
import IconSection from './icon-section'
import ParallaxContainer from './parallax-container'
import Footer from './footer'
import AppBar from 'material-ui/lib/app-bar'
import LeftNav from './left-nav'
import Styles from 'material-ui/lib/styles'
import TapEventPlugin from 'react-tap-event-plugin'


class Main extends Component {

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  componentWillMount() {
    console.log('main.cwm')
    TapEventPlugin()
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
        <ParallaxContainer id="index-banner" imageUrl='app/image/cycle.jpg'>
          <div className="section no-pad-bot">
            <div className="container">
              <h1 className="header center teal-text text-lighten-2">react-scratch-2</h1>
              <div className="row center">
                <h5 className="col s12 light">react test app 2</h5>
              </div>
              <div className="row center">
                <a href='https://github.com/tony-kerz/react-scratch' id="download-button" className="btn-large waves-effect waves-light teal lighten-1">
                  go there 2
                </a>
              </div>
            </div>
          </div>
        </ParallaxContainer>

        <div className="container">
          <div className="section">
            <div className='row'>
              <IconSection iconClass='mdi-image-flash-on' header='Speeds up development'>
                We did most of the heavy lifting for you to provide a default stylings that
                incorporate our custom components. Additionally, we refined animations and
                transitions to provide a smoother experience for developers.
              </IconSection>
              <IconSection iconClass='mdi-social-group' header='User Experience Focused'>
                By utilizing elements and principles of Material Design, we were able to
                create a framework that incorporates components and animations that
                provide more feedback to users. Additionally, a single underlying responsive
                system across all platforms allow for a more unified user experience.
              </IconSection>
              <IconSection iconClass='mdi-action-settings' header='Easy to work with'>
                We have provided detailed documentation as well as specific code examples to
                help new users get started. We are also always open to feedback and can answer
                any questions a user may have about Materialize.
              </IconSection>
            </div>
          </div>
        </div>

        <ParallaxContainer imageUrl='app/image/dr-m.jpg'>
          <div className="row center">
            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
          </div>
        </ParallaxContainer>

        <Section>
          <div className="row">
            <div className="col s12 center">
              <h3><i className="mdi-content-send brown-text" /></h3>
              <h4>Contact Us</h4>
              <p className="left-align light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac.
                Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros.
                Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus.
                Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed.
                Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat.
                Nullam eget dignissim mauris, non tristique erat.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae
              </p>
            </div>
          </div>
        </Section>

        <ParallaxContainer imageUrl='app/image/lee-dracula.jpg'>
          <div className="row center">
            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
          </div>
        </ParallaxContainer>

        <Footer/>
      </div>
    )
  }
}

export default Main
