import "../style/main.css";
import "nes.css/css/nes.min.css";

import React from "react";
import CookieBanner from "react-cookie-banner";
import { NavLink, Outlet } from "react-router-dom";

import ButtonContact from "./ButtonContact";
import Player from "./Player";

const Layout = () => {
  return (
    <>
      <div className="layout-container">
        v.0.1.1
        <br />
        <i className="nes-icon is-small star" id="small-margin"></i>
      </div>

      <Outlet />
      <CookieBanner
        message="We use only one cookie."
        onAccept={() => {}}
        cookie="user-has-accepted-cookies"
      />
      <div className="main-container">
        <ButtonContact />

        <Player />
        <NavLink to={`/impressum`} className="nav-link" id="small-margin-imp">
          Impressum - Privacy & Data
        </NavLink>
      </div>
    </>
  );
};

export default Layout;
