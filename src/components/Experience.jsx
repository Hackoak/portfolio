import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(0, 0, 0, 0)",
        // color: "transperant",
        // 'background-color': 'rgba(255, 255, 255, 0.8)',
        "border-radius": "18px",
        "backdrop-filter": "blur(20px)",
        "box-shadow": "0 0 10px rgba(0, 0, 0, 0.2)",
      }}
      contentArrowStyle={{
        borderRight: "7px dashed  rgba(0, 0, 0, 0.5)",
        // background: "rgba(0, 0, 0, 0)",

        "border-radius": "18px",
        // "backdrop-filter": "blur(20px)",
        // "box-shadow": "0 0 10px rgba(0, 0, 0, 0.2)",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full blur-content rounded-[30px]">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[80%] h-[80%]  rounded-[30px] "
          />
        </div>
      }
    >
      <div className="">
        <div className="">
          <div>
            <h3 className="text-white text-[24px] font-bold">
              {experience.title}
            </h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>

          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} name-text-gradient text-center`}
        >
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
