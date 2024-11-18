import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import "./Styles/Process.css"
const Process = () => {
  return (
    <div>
      <section className="our-process">
        <h1 className="d-flex justify-content-center text-black">Our Process</h1>
        <Container>
          <Row className="text-center">
          <Col sm={3}>
  <i className="bi bi-lightbulb icon-style path"></i>
</Col>

            <Col sm={3}>
              <i className="bi bi-gear icon-style path"></i>
              
            </Col>
            <Col sm={3}>
              <i className="bi bi-vector-pen icon-style path"></i>
              
            </Col>
            <Col sm={3}>
              <i className="bi bi-send icon-style path"></i>
              
            </Col>
          </Row>
          <h2 className="d-flex justify-content-center heading">Deliver</h2>
          <p>
            After completing the development phase, we ensure the final product meets your needs, 
            is tested thoroughly, and is ready for deployment. We provide ongoing support to 
            ensure everything runs smoothly post-launch.
          </p>
        </Container>
        </section>
  
    </div>
  )
}

export default Process
