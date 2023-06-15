import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="flex justify-center item-center text-secondary text-[12px] leading-[20px]">
          <p class="text-center ">
            &copy; 2023 Hackoak. All rights reserved. <br /> Designed by
            Harikrishnan
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
