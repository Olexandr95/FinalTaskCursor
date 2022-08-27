import React from "react";
import "./news.scss";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const NewsItem = ({ news, onDelete }) => {
  const { id, autName, title, content, image, date, _id } = news;

  return (
    <div className="main-conteiner-news">
      <div className="right-side">
        <div className="content-tittle">
          <div className="space-between">
            <span className="autor-nickname-date">
              <span className="autor-news-title"> Title: {title}</span> {date}
            </span>
          </div>
          <div>
            <DeleteIcon id={_id} onClick={onDelete} />
            <Link to={`/news/${_id}`}>
              <EditIcon />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img className="content-image" src={image} alt={image}></img>
      </div>
      <span className="content-news"> {content}</span>
      <span className="autor-news-name">Author Name : {autName} </span>
    </div>
  );
};

export default NewsItem;
