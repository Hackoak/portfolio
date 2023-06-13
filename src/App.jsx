import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
  import { Gradient } from "./utils/gradient.js";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Function to execute when the app initializes
    console.log("App initialized");
    // You can perform any initialization tasks here

  const gradient = new Gradient();
  gradient.initGradient("#gradient-canvas");
    // Clean up function (optional)
    return () => {
      // Clean up tasks (if needed)
  // const gradient = new Gradient();
  // gradient.initGradient("#gradient-canvas");
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <div className="blur-content no-bg">
            <About />
          </div>
        </div>

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <div className="blur-content ">
            <Experience />
          </div>
        </div>

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <div className="blur-skill-content ">
            <Tech />
          </div>
        </div>

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <div className="blur-project-content ">
            <Works />
          </div>
        </div>

        {/* <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
            <div className="blur-content ">
              <Feedbacks />
            </div>
          </div>
        </div> */}
        <div className="relative z-0">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
            <div className="blur-content ">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
