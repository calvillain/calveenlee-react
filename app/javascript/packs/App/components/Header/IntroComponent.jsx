import React from 'react';
import IntroBG from '../../assets/images/nyc_gradient.jpg';

var introStyle = {  
  display: 'table',
  padding: '0',
  width: '100%',
  height: '100%',
  color: '#fff',
  backgroundImage: "url(" + IntroBG + ")",
  backgroundSize: 'cover'
}

var introBodyStyle = {
  display: 'table-cell',
  verticalAlign: 'middle',
  textAlign: 'center'
}

var introH1Style = {
  fontFamily: 'Montserrat,Helvetica Neue,Helvetica,Arial,sans-serif',
  fontSize: '80px',
  fontWeight: '700'
}

class IntroComponent extends React.Component {
  render() {
    return (
      <div id='intro' className='intro' style={introStyle}>
        <div className='intro intro-body' style={introBodyStyle}>
          <h1 style={introH1Style}>Calvin J. Lee</h1>
        </div>
      </div>
    )
  }
}

export default IntroComponent;
