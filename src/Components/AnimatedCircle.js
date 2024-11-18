import React, { useState, useEffect } from "react";
import { Circle } from "rc-progress";

const AnimatedCircle = ({ targetPercent }) => {
  const [percent, setPercent] = useState(0);
  const [inView, setInView] = useState(false);

  // Use IntersectionObserver to trigger animation when the circle is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when the element is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    const element = document.querySelector("#animatedCircle");
    if (element) observer.observe(element);

    return () => observer.disconnect(); // Clean up observer on component unmount
  }, []);

  // Animate the circle when in view
  useEffect(() => {
    if (inView && targetPercent > 0) {
      const interval = setInterval(() => {
        setPercent((prev) => {
          const next = prev + 1; // Increment the percentage gradually
          if (next <= targetPercent) {
            return next; // Keep incrementing until we reach the target
          } else {
            clearInterval(interval); // Stop once target is reached
            return targetPercent; // Ensure we stop exactly at the target percent
          }
        });
      }, 10); // Set interval for smooth animation

      return () => clearInterval(interval); // Clean up interval when component unmounts
    }
  }, [inView, targetPercent]); // Re-run if inView or targetPercent changes

  return (
    <div id="animatedCircle" style={{ width: "60px", height: "60px" }}>
      <Circle percent={percent} strokeWidth={8} strokeColor="#760BCB" />
    </div>
  );
};

export default AnimatedCircle;
