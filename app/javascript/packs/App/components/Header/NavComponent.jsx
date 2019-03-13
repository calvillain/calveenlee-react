import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { Link, scroller} from 'react-scroll'

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
var LinkProps = {
  spy: true,
  smooth: 'easeInOutQuint',
  hashSpy: true,
  duration: 3000,
  delay: 300
}
var BrandLinkProps = { ...LinkProps }
BrandLinkProps.hashSpy = false
      
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
        <Link className='navbar-brand' 
              {...BrandLinkProps}
              href='#'
              to='intro'>
          calveenlee.com | <b>portfolio</b>
        </Link>
        <Navbar.Toggle aria-controls='topbar' />
        <Navbar.Collapse id='topbar'>
          <Nav className='ml-auto'> 
            <Link className='nav-link' 
                  {...LinkProps}
                  href='#about'
                  style={NavLinkStyle} 
                  to='about'>
              About
            </Link>
            <Link className='nav-link' 
                  {...LinkProps}
                  href='#work'
                  style={NavLinkStyle} 
                  to='work'>
              Work
            </Link>
            <Link className='nav-link'
                  {...LinkProps}
                  href='#contact'
                  style={NavLinkStyle}
                  to='contact'>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavComponent
