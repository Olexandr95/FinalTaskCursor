import React from "react";
import { Component } from "react";
import Nav from "./nav";
import "./header-css.scss";
//import Authorithation from "./auth/authorithation";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <div className="header-auth-box">
            <NavLink className="header-link" to="/signin">
              Sign in
            </NavLink>
            <NavLink className="header-link" to="/signup">
              Sign up
            </NavLink>
          </div>
          <img
            className="logo"
            src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
          ></img>
          <Nav />
        </div>
      </div>
    );
  }
}
