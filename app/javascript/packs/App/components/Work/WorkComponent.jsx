import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import LoremIpsum from '../LoremIpsum'

var SectionStyle = {
  paddingTop: '100px'
}

class WorkComponent extends React.Component {
  render() {
    return (
      <Container id='work' style={SectionStyle}>
        <Row>
          <Col>
            <h1>WORK</h1>
            <LoremIpsum />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default WorkComponent;
