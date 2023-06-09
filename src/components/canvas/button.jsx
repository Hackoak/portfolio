import React, { useState } from 'react';

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
          <div className="{ flex flex-row }">
            <div className="{ btn }">
              <img src="src/assets/social/github.svg" className="{ sicon }" />
            </div>
            <div className="{ btn }">
              <img src="src/assets/social/linkedin.svg" className="{ sicon }" />
            </div>
            <div className="{ btn }">
              <img src="src/assets/social/discord.svg" className="{  }" />
            </div>
            <div className="{ btn }">
              <img src="src/assets/social/email.svg" className="{  }" />
            </div>{" "}
            <div className="{ btn }">
              <img src="src/assets/social/twitter.svg" className="{  }" />
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
