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

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
            <div className="blur-content ">
              <About />
            </div>
          </div>

          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
            <div className="blur-content ">
              <Experience />
            </div>
          </div>

          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
            <div className="blur-content ">
              <Tech />
            </div>
          </div>

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
            <div className="blur-content ">
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
