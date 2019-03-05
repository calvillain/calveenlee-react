import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

class NavComponent extends React.Component {
  render() {
    return (
      <Navbar variant='dark' expand='sm' fixed='top'>
        <Navbar.Brand href='#home'>calveenlee | portfolio</Navbar.Brand>
      </Navbar>
    )
  }
}

export default NavComponent
