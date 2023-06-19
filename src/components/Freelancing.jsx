import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { freelance } from "../constants";

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
      <div className={` rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div variants={textVariant()}>
          <p className={`${styles.sectionSubText} name-text-gradient`}>
            Services i do On
          </p>
          <h2 className={styles.sectionHeadText}>Freelance.</h2>
        </div>
      </div>

                   {/* <div> </div> */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {freelance.map((freelancing, index) => (
          <FreelancingCard
            key={freelancing.name}
            index={index}
            {...freelancing}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(FreelancingServices, "");
