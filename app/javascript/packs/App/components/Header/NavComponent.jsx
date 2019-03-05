import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavComponent extends React.Component {
  render() {
    return (
      <Navbar variant='dark' expand='sm' fixed='top'>
        <Navbar.Brand href='#home'>calveenlee | portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls='topbar' />
        <Navbar.Collapse id='topbar'>
          <Nav className='ml-auto'> 
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#work'>Work</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavComponent
