import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnimatedNumber from 'react-animated-number';
import {Circle} from 'rc-progress'
import "./Styles/About.css";

const About = () => {
  const [clientSatisfaction, setClientStatisfaction] = useState(95)
  const [efficientSolution, setefficientSolution] = useState(80)
  console.log(clientSatisfaction);
  return (
    <section id="AboutSection">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="about-card1">
              <p className="about-head">
                We are <br />
                <span>FLeact Tech.</span>
                <hr className="about-line" />
              </p>
              {/* <p className="about-head1">Fleact Tech</p> */}

              <p className="about-head-para">
                Our vision is to pioneer strategic solutions, revolutionizing
                industries and enriching lives through innovation and
                excellence. We aim to set new benchmarks in technology,
                empowering individuals and organizations worldwide for a
                brighter future.
              </p>
              <button>GET A QUOTE TODAY</button>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center">
            <div className="wholeDiv">
              <div className="aboutDivBox">              
              <div className="circle"></div> <p><span className="boxSpan"><AnimatedNumber key={clientSatisfaction} value={95}fontStyle={{ fontSize: '3rem', color: '#ffffff' }}config={{ tension: 50, friction: 10 }} formatValue={(n) => `${Math.round(n)}%`} duration={3000}/></span> <br/>Client Satisfaction</p>
              </div>
              <div className="aboutDivBox">
               <div className=""></div><Circle percent={95} strokeWidth={10}strokeColor={"#D3D3D3"}/> <p><span className="boxSpan"><AnimatedNumber key={efficientSolution} value={80}fontStyle={{ fontSize: '3rem', color: '#ffffff' }}config={{ tension: 50, friction: 10 }} formatValue={(n) => `${Math.round(n)}%`} duration={3000}/></span> <br />Strategically Efficient Solutions</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <AnimatedNumber animateToNumber={`${clientSatisfaction}`}fontStyle={{ fontSize: '3rem', color: '#fa12f' }}config={{ tension: 50, friction: 10 }}/>
    </section>
  );
};

export default About;
