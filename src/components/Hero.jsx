import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, ButtonComponent } from "./canvas";
import Image from "../assets/user1_rm.png";
/// variants
import { fadeIn } from "../utils/variants.js";

// import icons
// import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto blur-content md:flex`}
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-0 px-6 flex flex-row items-start gap-5`}
      >
        {/* text */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#c6a500]" />
          <div className="w-1 sm:h-80 h-60 yellow-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#915EFF] yellow-text-gradient">
              Harikrishnan
            </span>
          </h1>
        
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop mApps for android & iOS,{" "}
            <br className="sm:block hidden" />
            backend apps, End-to-end AWS Server handling,
            <br className="sm:block hidden" />
            Data Science
          </p>
          
          <div
            // variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 text-[26px] mt-3 lg:text-[30px]  yellow-text-gradient font-semibold uppercase leading-[1]"
          >
            {/* <span className="mr-4 text-green">I am a</span> */}
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Data Scientist",
                2000,
                "YouTuber",
                2000,
              ]}
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
            />
          </div>

          <div
            className={`absolute inset-0 top-[550px]  left-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
          >
            <ButtonComponent />
          </div>
          {/* social links */}
        </div>
        {/* images */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="hidden lg:flex flex-1 max-w-[350px] lg:max-w-[482px] w-96 flex justify-end"
        >
          <div>
            <img
              src={Image}
              alt=""
              className="profile-img min-h-[300px] max-w-[350px] self-end"
            />
          </div>
        </motion.div>
      </div>
    </section>

    // <section
    //   className={`relative w-full h-screen mx-auto blur-content md:flex`}
    // >
    //   <div
    //     className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-0 px-6 flex flex-row items-start gap-5`}
    //   >
    //     <div className="flex flex-col justify-center items-center mt-5">
    //       <div className="w-5 h-5 rounded-full bg-[#c6a500]" />
    //       <div className="w-1 sm:h-80 h-60 yellow-gradient" />
    //     </div>

    //     <div>
    //       <h1 className={`${styles.heroHeadText} text-white`}>
    //         Hi, I'm{" "}
    //         <span className="text-[#915EFF] yellow-text-gradient">
    //           Harikrishnan
    //         </span>
    //       </h1>
    //       <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    //         I develop mApps for android & iOS,{" "}
    //         <br className="sm:block hidden" />
    //         backend apps, End-to-end AWS Server handling,
    //         <br className="sm:block hidden" />
    //         Data Science
    //       </p>

    //       <div
    //         className={`absolute inset-0 top-[550px]  left-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    //       >
    //         <ButtonComponent />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
