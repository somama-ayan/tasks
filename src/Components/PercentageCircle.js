// import React, { useState, useEffect } from 'react';
// import AnimatedNumber from "react-animated-number";
// import Col from 'react-bootstrap/esm/Col';
// const PercentageCircle = ({ percentage, label }) => {
//   const [fillColor, setFillColor] = useState("");

//   useEffect(() => {
//     setFillColor(percentage > 90 ? 'blue' : 'purple'); // Adjust color based on percentage
//   }, [percentage]);

//   const circleStyle = {
//     background: `conic-gradient(${fillColor} ${percentage * 3.6}deg, lightgray 0deg)`,
//   };

//   return (
//     <div className="circle" style={circleStyle}>
//       <div className="inner-circle">
//         <AnimatedNumber
//           component="span"
//           value={percentage}
//           duration={1000}
//           style={{
//             fontSize: "1.5rem",
//             fontWeight: "bold",
//             color: fillColor,
//           }}
//           formatValue={(n) => `${Math.round(n)}%`}
//         />
//       </div>
//     </div>
//   );
// };

// export default function MyComponent() {
//   return (
//     <Col lg={6} md={6} sm={12} className="d-flex justify-content-center align-items-center">
//       <div className="wholeDiv">
//         <div className="aboutDivBox">
//           <PercentageCircle percentage={95} label="Client Satisfaction" />
//           <p><span className="boxSpan">95%</span><br />Client Satisfaction</p>
//         </div>
//         <div className="aboutDivBox">
//           <PercentageCircle percentage={80} label="Strategically Efficient Solutions" />
//           <p><span className="boxSpan">80%</span><br />Strategically Efficient Solutions</p>
//         </div>
//       </div>
//     </Col>
//   );
// }
