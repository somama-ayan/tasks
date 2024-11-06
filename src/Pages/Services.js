import React, { useState, useEffect } from 'react';
import './Styles/Services.css';

const Services = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [showLine, setShowLine] = useState(0);

  const images = [
    { 
      src: "https://www.fleacttech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgd.db64e832.png&w=640&q=75", 
      alt: "services 1", 
      heading: "Web Development", 
      text: "Elevate your Online presence with our comprehensive web development services. Our expert team combines cutting-edge technology with creative design to craft websites that not only captivate audiences but also drive results."
    },
    { 
      src: "https://www.fleacttech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgd.db64e832.png&w=640&q=75", 
      alt: "services 2", 
      heading: "Digital Marketing", 
      text: "Elevate your brand's visual identity with our full-suite graphic design services, encompassing UI/UX design and branding. Our talented team combines creativity with strategic thinking to deliver captivating designs that resonate with your audience."
    },
    { 
      src: "https://www.fleacttech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgd.db64e832.png&w=640&q=75", 
      alt: "services 3", 
      heading: "Graphic Design", 
      text: "Our talented team combines creativity with strategic thinking to deliver captivating designs that resonate with your audience. From logos to user interfaces, we craft visually stunning assets that embody your brand's essence and leave a lasting impression."
    },
    { 
      src: "https://www.fleacttech.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgd.db64e832.png&w=640&q=75", 
      alt: "services 4", 
      heading: "Mobile App Development", 
      text: "Build advanced e-commerce platforms designed to convert visitors into customers."
    },
  ];

  const handleNextImage = () => {
    setActiveImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleScroll = () => {
    const servicesSection = document.getElementById("services-section");
    const rect = servicesSection.getBoundingClientRect();
    setShowLine(rect.top <= window.innerHeight && rect.bottom >= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="services py-5" id="services-section">
      <h1 className="display-4 mb-4">Our Services</h1>
      <div className={`line-below ${showLine ? "show" : ""}`}></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 position-relative">
            <button className="arrow-button left-arrow" onClick={handlePrevImage}>
              <i className="bi bi-arrow-left"></i>
            </button>
            <img 
              src={images[activeImage].src} 
              alt={images[activeImage].alt} 
              className="img-fluid" 
            />
            <button className="arrow-button right-arrow" onClick={handleNextImage}>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="col-md-6">
            <h2 className="service-heading">{images[activeImage].heading}</h2>
            <p>{images[activeImage].text}</p>
            <button className="get-in-touch-btn mt-4">Get in Touch</button>
          </div>
        </div>
      </div>
      <div className={`line-below ${showLine ? "show" : ""}`}></div>
    </section>
  );
}

export default Services;
