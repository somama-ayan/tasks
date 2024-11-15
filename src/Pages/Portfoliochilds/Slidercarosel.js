import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "./Slidecarosel.css";

const Slidercarosel = ({heading,headColor,category,text , imageOne, imageTwo,imageThree, imageFour}) => {
      
  return (
    <div>
        
      <section className="mb-5">
          <Container fluid>
            <Row>
              <Col lg={7} md={6} sm={12} className="d-flex justify-content-start align-items-center">
                <div>
                  <h2 className="head2Development"style={{ color: headColor }}>{heading}</h2>
                  <p className="text-center">{category}</p>
                </div>
              </Col>

              <Col lg={5} md={6} sm={12}  className="developmentSection">
                <p className="">
                  {text}
                </p>
              </Col>
            </Row>
          </Container>
         

          <div className="carousel-container">
          <Carousel
            centerMode={true}
            centerSlidePercentage={60}
            showIndicators={true}
            showThumbs={false}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="custom-arrow custom-arrow-prev"
                  style={{backgroundColor: headColor}}
                >
                  <i class="bi bi-arrow-left"></i>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="custom-arrow custom-arrow-next"
                  style={{backgroundColor: headColor}}
                >
                  <i class="bi bi-arrow-right"></i>
                </button>
              )
            }
          >
               
            <div>
              <img src={imageOne} alt="digital" />
            </div>
            <div>
              <img src={imageTwo} alt="digital" />
            </div>
            <div>
              <img src={imageThree} alt="digital" />
            </div>
            <div>
              <img src={imageFour} alt="digital" />
            </div>
            
          </Carousel>
        </div>
 
      </section>
    

                 
                       
    </div>
  );
};

export default Slidercarosel;
