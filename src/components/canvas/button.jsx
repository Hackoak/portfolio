import React, { useState } from "react";
import { twitter, linkedin, github_out, discord, email } from "../../assets";
import { contacts } from "../../constants";

const ButtonComponent = (props) => {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  const sty =
    "w-[55px] h-[55px] flex items-center justify-center m-2 px-3 py-2 rounded-[20px] text-base  sm:w-25px sm:h-25px lg:text-2xl sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 border-dashed border-2 border-white-500";
  const v = props.isContact ? "cbtn" : "btn";
  const s = props.isContact ? "csicon" : "sicon";
  return (
    <div>
      <div className="{ flex }">
        {contacts.map((contact, index) => (
          <a
            href={contact.url}
            target={contact.target}
            rel="noopener noreferrer"
            className={` ${v} m-4`}
          >
            <img
              src={contact.icon}
              className={` ${contact.hasSub ? s : ""} `}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ButtonComponent;
