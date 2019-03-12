import React from 'react'
import NavComponent from './NavComponent'
import IntroComponent from './IntroComponent'

var HeaderStyle = {
  height: '100vh'
}

class HeaderComponent extends React.Component {
  render() {
    return (
      <header style={HeaderStyle}>
        <NavComponent />
        <IntroComponent />
      </header>
    )
  }
}

export default HeaderComponent
