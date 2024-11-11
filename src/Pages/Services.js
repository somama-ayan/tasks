import React, { useState, useEffect } from 'react';
import './Styles/Services.css';
import digital from './Images/RestSectionImages/digital.jpg';
import website from './Images/RestSectionImages/digital.jpg';

const Services = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [showLine, setShowLine] = useState(0);
  const [arrowPosition, setArrowPosition] = useState({ left: 20, right: 20 });

  const images = [
    { 
      src: website, 
      alt: "services 1", 
      heading: "Web Development", 
      text: "Elevate your online presence with our comprehensive web development services. Our expert team combines cutting-edge technology with creative design to craft websites that not only captivate audiences but also drive results."
    },
    { 
      src: digital, 
      alt: "services 2", 
      heading: "Digital Marketing", 
      text: "Boost your online presence with our comprehensive digital marketing services, including SEO, social media management, and more. Our expert team crafts tailored strategies to elevate your brand visibility and engagement across digital platforms."
    },
    { 
      src: "https://www.fleacttech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgd.db64e832.png&w=640&q=75", 
      alt: "services 3", 
      heading: "Graphic Design", 
      text: "Our creative team designs compelling visuals to engage your audience effectively."
    },
    { 
      src: "https://www.fleacttech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgd.db64e832.png&w=640&q=75", 
      alt: "services 4", 
      heading: "Mobile App Development", 
      text: "Transform your ideas into seamless mobile experiences with our innovative app development services."
    },
  ];

  const processSteps = [
    { icon: 'bi bi-search' },
    { icon: 'bi bi-gear' },
    { icon: 'bi bi-vector-pen rotate-up' },
    { icon: 'bi bi-send' },
  ];

  const handleNextImage = () => {
    setActiveImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleScroll = () => {
    const servicesSection = document.getElementById("ServicesSection");
    const rect = servicesSection.getBoundingClientRect();
    setShowLine(rect.top <= window.innerHeight && rect.bottom >= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollPosition = window.scrollY;
      const newLeftPosition = 20 + scrollPosition / 10;
      const newRightPosition = 20 + scrollPosition / 10;
      setArrowPosition({ left: newLeftPosition, right: newRightPosition });
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <section>
      <section className="services py-5" id="ServicesSection">
        <button
          className="left-arrow-fixed"
          onClick={handlePrevImage}
          style={{ left: `${arrowPosition.left}px` }}
        >
          <i className="bi bi-arrow-left" style={{ fontSize: '30px' }}></i>
        </button>

        <button
          className="right-arrow-fixed"
          onClick={handleNextImage}
          style={{ right: `${arrowPosition.right}px` }}
        >
          <i className="bi bi-arrow-right" style={{ fontSize: '30px' }}></i>
        </button>

        <h1 className="display-4 mb-4">Our Services</h1>
        <div className={`line-below ${showLine ? "show" : ""}`}></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className='d-flex justify-content-center'>
                <img 
                  src={images[activeImage].src} 
                  alt={images[activeImage].alt} 
                  className="img-fluid service-image" 
                />
              </div>
              <div className="dot-container">
                {images.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === activeImage ? 'active' : ''}`} 
                    onClick={() => setActiveImage(index)} 
                  ></span>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="service-heading">{images[activeImage].heading}</h2>
              <p className="service-text">{images[activeImage].text}</p>
              <button className="get-in-touch-btn mt-4">Get In Touch</button>
            </div>
          </div>
        </div>
      </section>

      <section className="process py-5">
        <h2 className="display-4 mb-4 text-center">Our Process</h2>
        <div className="container">
          <div className="row">
            {processSteps.map((step, index) => (
              <div key={index} className="col-md-3 text-center">
                <div className="process-icon mb-3">
                  <i className={step.icon} style={{ fontSize: '50px', color: '#007bff' }}></i>
                </div>
                <h3 className="process-heading">{step.heading}</h3>
              </div>
            ))}
          </div>
          <h2 className="text-center">Deliver</h2>
          <p className="text-center mt-4">Our process ensures a structured approach, aligning each project with your goals for optimal results.</p>
        </div>
      </section>
    </section>
  );
};

export default Services;

