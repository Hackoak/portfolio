import React, { useState } from 'react';
import { twitter, linkedin, github_out, discord, email } from "../../assets";

const ButtonComponent = () => {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {showDiv && (
          <div className="{ lcbtn }">
            <p
              className={`text-secondary text-[17px] max-w-3xl leading-[30px] text-[#dfd9ff] text-white-100`}
            >
              Stay connect
            </p>
          </div>
        )}
        {!showDiv && (
          <div className="{ flex }">
            <div className="{ btn m-4}">
              <img src={github_out} className="{ sicon }" />
            </div>
            <div className="{ btn m-4}">
              <img src={linkedin} className="{ sicon }" />
            </div>
            <div className="{ btn m-4}">
              <img src={discord} className="{  }" />
            </div>
            <div className="{ btn m-4}">
              <img src={email} className="{  }" />
            </div>{" "}
            <div className="{ btn m-4}">
              <img src={twitter} className="{  }" />
            </div>
          </div>
        )}
      </button>
      {/* {showDiv && <div className="{w-[35px] h-[64px] rounded-3xl border-2 border-white }">
              <p className={`${styles.heroSubText} mt-2 text-white-100 m-4 btn`}>
            Let's connect 
              </p>
             
          </div> 
      } */}
    </div>
  );
};

export default ButtonComponent;
