import React from 'react';
import IntroBG from '../../assets/images/nyc_gradient.jpg';
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var introStyle = {  
  display: 'flex',  
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0',
  width: '100%',
  height: '100%',
  color: '#fff',
  backgroundImage: "url(" + IntroBG + ")",
  backgroundSize: 'cover'
}

var introBodyStyle = {
  verticalAlign: 'middle',
  textAlign: 'center'
}

var iconStyle = {
  position: 'absolute',
  color: '#fff',
  transition: 'opacity 2s ease-in-out',
  opacity: '0'
}
var visibleIconStyle = {...iconStyle}
visibleIconStyle.opacity = '.8'

var introH1Style = {
  fontFamily: 'Montserrat,Helvetica Neue,Helvetica,Arial,sans-serif',
  fontSize: '80px',
  fontWeight: '700'
}
var linkProps = {
  spy: true,
  smooth: 'easeInOutQuint',
  hashSpy: true,
  duration: 2000,
  delay: 200
}

class IntroComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {timedOut: false}
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({timedOut: true})
      }.bind(this), 5000)
  }

  render() {
    return (
      <div id='intro' className='intro' style={introStyle}>
        <div className='intro intro-body' style={introBodyStyle}>
          <h1 style={introH1Style}>Calvin J. Lee</h1>
          <Link {...linkProps} href="#about" to='about'>
            <FontAwesomeIcon icon='angle-double-down' size='3x'style={this.state.timedOut ? visibleIconStyle : iconStyle}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default IntroComponent;
