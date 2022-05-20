import React from "react";
import Player from "./Player";
import ButtonContact from "./ButtonContact";
import "../style/main.css";
import "nes.css/css/nes.min.css";

function LandingPage() {
  return (
    <div className="main-container">
      <br />
      <br />
      <br />
      <br />
      <div className="App">
        <img src={require("../images/PETERFINAL.gif")} alt="PETER STYLE" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Player />
        <br />
        <br />
        <br />
        <ButtonContact />
      </div>
    </div>
  );
}

export default LandingPage;
