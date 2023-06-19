import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { freelance } from "../constants";

import { useState } from "react";

const Button = ({ index, freelancing, name, kind, image }) => (
  <button
    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
    onClick={() => toggleTab(1)}
  ></button>
);

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [active, setActive] = useState("AI");

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const len = freelance.map((e, index) => e.kind);
  const uniqueList = [...new Set(len)];
  console.log(uniqueList);
  return (
    <div className="mt-10">
      <div
        className={`mt-10 pb-14 ${styles.paddingX} flex flex-wrap justify-center item-center gap-7`}
      >
        {freelance.map((freelancing, index) => {
          if (active === freelancing.kind) {
            return (
              <FreelancingCard
                key={freelancing.name}
                index={index}
                {...freelancing}
              />
            );
          }
        })}
      </div>
      <div className=" flex flex-row justify-center item-center   backdrop-blur rounded-full ">
        <div className=" w-fit  py-2 px-6 flex flex-row justify-center item-center gap-10 bloc-tabs  backdrop-blur rounded-full ">
          {uniqueList.map((nav) => (
            <div
              key={nav}
              className={`${
                active !== nav ? "text-white text-opacity-50" : "name-text-gradient"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav)}
            >
              <a href={`#${nav.id}`}>{nav} </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const FreelancingCard = ({ index, freelancing, name, kind, image }) => (
  <div
    // variants={fadeIn("", "spring", index * 0.3, 0.5)}
    className="mixed-card-content p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <div className="flex-1 flex flex-col justify-center items-center ">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className={`w-20 h-20 ${kind === "BACKEND" ? "rounded-full" : ""} `}
        />
        <p className="mt-10 freelance-text-gradient font-medium text-[16px] text-center">
          {name}
        </p>
      </div>
    </div>
  </div>
);

const FreelancingServices = () => {
  return (
    <div className={``}>
      <div className={` ${styles.paddingX}`}>
        <div variants={textVariant()}>
          <p className={`${styles.sectionSubText} name-text-gradient`}>
            Services i do On
          </p>
          <h2 className={styles.sectionHeadText}>Freelance.</h2>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default SectionWrapper(FreelancingServices, "");
