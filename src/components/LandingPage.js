import "../style/main.css";
import "nes.css/css/nes.min.css";

import React from "react";

import ButtonContact from "./ButtonContact";
import Player from "./Player";

function LandingPage() {
  return (
    <div className="main-container">
      <div className="nes-container is-centered with-title" id="medium">
        <h3 className="title"> Peter Style </h3>
        <div className="internal-container">
          <img src={require("../images/PETERFINAL.gif")} alt="PETER STYLE" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
