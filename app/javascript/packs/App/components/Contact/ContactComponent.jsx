import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

var SectionStyle = {
  paddingTop: '100px',
  paddingBottom: '200px'
}

class ContactComponent extends React.Component {
  render() {
    return (
      <Container id='contact' style={SectionStyle}>
        <Row>
          <Col>
            <h1>Contact</h1>
            <h3><a href='mailto:calvin.jaeho.lee@gmail.com'>calvin.jaeho.lee@gmail.com</a></h3>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ContactComponent;
