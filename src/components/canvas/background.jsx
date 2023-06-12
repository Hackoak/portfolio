import React, { useState } from "react";

const BackgroundComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const backgroundStyle = {
    background: `linear-gradient(to bottom right, #ff00ff, #00ffff, ${position.x}px, ${position.y}px)`,
    /* Additional background styles can be added here */
  };

  return <div style={backgroundStyle} onMouseMove={handleMouseMove}></div>;
};
export default BackgroundComponent;
