import React, { useEffect } from "react";
  import { Gradient } from "../../utils/gradient.js";

function BackgroundComponent() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div>
      <canvas
        id="gradient-canvas"
        className="relative w-full h-screen mx-auto"
        data-js-darken-top
        data-transition-in
      />
    </div>
  );
}

export default BackgroundComponent;
