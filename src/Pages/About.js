import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnimatedNumber from "react-animated-number";
import "./Styles/About.css";
import AnimatedCircle from "../Components/AnimatedCircle";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [clientSatisfaction, setClientStatisfaction] = useState(95);
  const [efficientSolution, setefficientSolution] = useState(80);
  console.log(clientSatisfaction);

  const { ref: aboutSectionRef, inView } = useInView({
    triggerOnce: false, // Allows animation to reset every time section comes into view
    threshold: 0.2, // Triggers when 20% of the section is in view
  });

  const animationDuration = 3000;

  return (
    <section id="AboutSection" ref={aboutSectionRef}>
      <div className="TopDiv">
        <div class="position-absolute top-0 w-100 gradient"></div>
      </div>
      <Container className="p-3">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="about-card1">
              <p className="about-head">
                We are <br />
                <span className="aboutSpan">FLeact Tech.</span>
                <div
                  className={`about-line ${inView ? "animate-line" : ""}`}
                ></div>
              </p>
              {/* <p className="about-head1">Fleact Tech</p> */}

              <p className="about-head-para">
                Our vision is to pioneer strategic solutions,{" "}
                <span>revolutionizing industries</span> and{" "}
                <span>enriching lives</span> through innovation and excellence.
                We aim to set new benchmarks in technology, empowering
                individuals and organizations worldwide for a brighter future.
              </p>
              <button className="mb-3">GET A QUOTE TODAY</button>
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="wholeDiv">
              <div className="aboutDivBox">
                <div className="circle">
                  {inView && (
                    <AnimatedCircle
                      targetPercent={clientSatisfaction}
                      data-aos="fade-left"
                      data-aos-delay="100"
                      duration={animationDuration}
                    />
                  )}
                </div>
                <p>
                  <span className="boxSpan">
                    {inView && (
                      <AnimatedNumber
                        key={clientSatisfaction}
                        value={clientSatisfaction}
                        fontStyle={{ fontSize: "3rem", color: "#ffffff" }}
                        config={{ tension: 50, friction: 10 }}
                        formatValue={(n) => `${Math.round(n)}%`}
                        duration={animationDuration}
                      />
                    )}
                  </span>
                  <br />
                  Client Satisfaction
                </p>
              </div>

              <div className="aboutDivBox">
                <div className="circle">
                  {inView && (
                    <AnimatedCircle
                      targetPercent={efficientSolution}
                      duration={animationDuration}
                    />
                  )}
                </div>
                <p>
                  <span className="boxSpan">
                    {inView && (
                      <AnimatedNumber
                        key={efficientSolution}
                        value={efficientSolution}
                        fontStyle={{ fontSize: "3rem", color: "#ffffff" }}
                        config={{ tension: 50, friction: 10 }}
                        formatValue={(n) => `${Math.round(n)}%`}
                        duration={animationDuration}
                      />
                    )}
                  </span>
                  <br />
                  Strategically Efficient Solutions
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="BottomDiv">
        <div class="position-absolute top-0 w-100 gradientBottom"></div>
      </div>
    </section>
  );
};

export default About;
