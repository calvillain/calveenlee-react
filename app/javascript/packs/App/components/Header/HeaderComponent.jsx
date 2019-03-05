import React from 'react'
import NavComponent from './NavComponent'
import IntroComponent from './IntroComponent'

class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <NavComponent />
        <IntroComponent />
      </header>
    )
  }
}

export default HeaderComponent
