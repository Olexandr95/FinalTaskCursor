import React from "react";
import "./users-scss.scss";
import { useState } from "react";
import Header from "../Header/header";
import MapUsers from "./addNewUser/mapUsers";
import UserForm from "./addNewUser/userForm";

const Users = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <Header />
        <div className="post-btn">
          <button className="post-new-btn hide" onClick={toggleClass}>
            {!isActive ? "+add New User" : "Cloose Form"}
          </button>
        </div>
        <div className={isActive ? "show" : "hide"}>
          <UserForm />
        </div>
        <MapUsers />
        
        </>
  )
};

export default Users;
