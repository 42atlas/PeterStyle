import React from "react";

import "../style/main.css";
import "nes.css/css/nes.min.css";

const ButtonMailto = () => {
  return (
    <div className="main-container">
      <a href="https://raffaelli.studio"
      /* onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }} */
      >
        © raffaelli.studio 2022
      </a>
    </div>
  );
};

export default ButtonMailto;
