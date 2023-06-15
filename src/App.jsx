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
  Footer,
} from "./components";
import { Gradient } from "./utils/gradient.js";
import React, { useEffect } from "react";

const App = () => {
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
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
