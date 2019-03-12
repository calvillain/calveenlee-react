import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


var NavbarTopStyle = {
  fontFamily: 'Montserrat,Helvetica Neue,Helvetica,Arial,sans-serif',
  transition: 'background .5s ease-in-out',
  background: 'transparent'
}
var NavbarStyle = {
  fontFamily: 'Montserrat,Helvetica Neue,Helvetica,Arial,sans-serif',
  transition: 'background .5s ease-in-out',
  background: '#000'
}
var NavLinkStyle = {
  textTransform: 'uppercase'
}

      
class NavComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {top: true}
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (this.state.top !== true && window.scrollY <= window.innerHeight * 0.4) {
    this.setState({top: true})
  } else if (this.state.top === true && window.scrollY >= window.innerHeight * 0.4) {
    this.setState({top: false})
    }
  }

  render() {
    return (
      <Navbar variant='dark' expand='sm' fixed='top' style={this.state.top ? NavbarTopStyle : NavbarStyle}>
        <Navbar.Brand href='/'>calveenlee.com | <b>portfolio</b></Navbar.Brand>
        <Navbar.Toggle aria-controls='topbar' />
        <Navbar.Collapse id='topbar'>
          <Nav className='ml-auto'> 
            <Nav.Link style={NavLinkStyle} href='#about'>About</Nav.Link>
            <Nav.Link style={NavLinkStyle} href='#work'>Work</Nav.Link>
            <Nav.Link style={NavLinkStyle} href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavComponent
