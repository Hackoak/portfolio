import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const ServiceCard = ({ index, title, icon }) => (
  <Tilt options={defaultOptions} className="xs:w-[250px] w-full backdrop-blur">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full violet-gradient p-[1px] rounded-[20px] shadow-card backdrop-blur"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col blur-card-content"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div
        // variants={textVariant()}  
      >
        <p className={`${styles.sectionSubText} name-text-gradient`}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        // variants={fadeIn("", "", 0.1, 0.5)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I possess strong software development skills and have hands-on
        experience in technologies such as Flutter, TypeScript, and JavaScript.
        I specialize in utilizing frameworks like Node.js and NestJs. My ability
        to grasp new concepts swiftly enables me to collaborate effectively with
        clients. Together, we can develop solutions that are efficient,
        scalable, and user-friendly, addressing real-world challenges. I am
        eager to work with you to transform your ideas into reality.
        {/* I'm a skilled software developer with experience in Flutter, TypeScript and
        JavaScript, and expertise in frameworks like Node.js, and
        NestJs. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life! */}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 backdrop-blur">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
