import React, { useState, useEffect } from 'react';
import './Styles/Services.css';

const Services = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [showLine, setShowLine] = useState(0);
  const [arrowPosition, setArrowPosition] = useState({ left: 20, right: 20 });

  const images = [
    { 
      src: "https://www.fleacttech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgd.db64e832.png&w=640&q=75", 
      alt: "services 1", 
      heading: "Web Development", 
      text: "Elevate your Online presence with our comprehensive web development services. Our expert team combines cutting-edge technology with creative design to craft websites that not only captivate audiences but also drive results."
    },
    { 
      src: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fbanners%2Fwebsite%2F1726218578965-Gulberg%203%20Web%20Banner-02.jpg&w=1920&q=75", 
      alt: "services 2", 
      heading: "Digital Marketing", 
      text: "Boost your online pressence with our comprehensive digital marketing services,including SEO,socail media mangement and more.Our expert teams crafts tailored startegies to evalute you brand visibility and engagement across digital platform.Let us drive your success with the targeted campaigns,compelling content and data-driven insights."
    },
    { 
      src: "https://www.fleacttech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgd.db64e832.png&w=640&q=75", 
      alt: "services 3", 
      heading: "Graphic Design", 
      text: "Boost your online pressence with our comprehensive digital marketing services,including SEO,socail media mangement and more.Our expert teams crafts tailored startegies to evalute you brand visibility and engagement across digital platform.Let us drive your success with the targeted campaigns,compelling content and data-driven insights."
    },
    { 
      src: "https://www.fleacttech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgd.db64e832.png&w=640&q=75", 
      alt: "services 4", 
      heading: "Mobile App Development", 
      text: "Maximaize your digital imapact with our mobile app development service.Our skilled team merges innovation with sleek design to create apps that deliver the tangible results.Let us transfrom your ideas into seamless mobile experiences that capitavte users and drive success."
    },
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
    console.log("i am ok!")

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
<<<<<<< HEAD
    <section className="services py-5" id="services-section">
      <button
        className="left-arrow-fixed"
        onClick={handlePrevImage}
        style={{ left: `${arrowPosition.left}px` }}
      >
        <i className="bi bi-arrow-left"></i>
      </button>

      <button
        className="right-arrow-fixed"
        onClick={handleNextImage}
        style={{ right: `${arrowPosition.right}px` }}
      >
        <i className="bi bi-arrow-right"></i>
      </button>

=======
    <section className="services py-5" id="ServicesSection">
>>>>>>> c13230d7616af76d0438160c5df0b55087891877
      <h1 className="display-4 mb-4">Our Services</h1>
      <div className={`line-below ${showLine ? "show" : ""}`}></div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img 
              src={images[activeImage].src} 
              alt={images[activeImage].alt} 
              className="img-fluid service-image" 
            />
            {/* Dot navigation */}
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
            <button className="get-in-touch-btn mt-4">Get IN Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

