import React from "react";
import "./post-scss.scss";
import { useState } from "react";
import MapPosts from "./addNewPost/mapPost";
import PostForm from './addNewPost/postForm';
import Header from "../Header/header";
//import MapUsers from "../addNewUser/mapUsers";
//import UserForm from "../addNewUser/userForm";

const Posts = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <Header />
        <div className="post-btn">
          <button className="post-new-btn hide" onClick={toggleClass}>
            {!isActive ? "+add New Post" : "Cloose Form"}
          </button>
        </div>
        <div className={isActive ? "show" : "hide"}>
          <PostForm />
        </div>
        <MapPosts />
        
        </>
  )
};

export default Posts;
