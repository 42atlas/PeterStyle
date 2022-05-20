import React from "react";
import { Link } from "react-router-dom";
import "../style/main.css";
import "nes.css/css/nes.min.css";

const ButtonMailto = () => {
  return (
    <div className="main-container">
      <Link
        to="/contact"
        /* onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }} */
      >
        {"© raffaelli.studio"}
      </Link>
    </div>
  );
};

export default ButtonMailto;