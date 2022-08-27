import React from "react";
import "./news-scss.scss";
import { useState } from "react";
import Header from "../Header/header";
import MapNews from "./addNewNews/mapNews";
import NewsItem from "./addNewNews/NewsForm";

const News = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const handleScroll = event => {
    console.log('scrollTop: ', event.currentTarget.scrollTop);
    console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  };
  return (
    <>
      <Header  />
        <div className="post-btn">
          <button className="post-new-btn hide" onClick={toggleClass} onScroll={handleScroll}>
            {!isActive ? "+add New News" : "Cloose Form"}
          </button>
        </div>
        <div className={isActive ? "show" : "hide"}>
          <NewsItem />
        </div>
        <MapNews />
        
        </>
  )
};

export default News;
