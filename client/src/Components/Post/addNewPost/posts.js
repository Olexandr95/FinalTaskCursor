import React, { useState } from "react";
import "./form.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  changeStateLikes,
  changeStateReposts,
  changeStateComments,
} from "../../../redax/actions/postActions";

const PostsF = ({ post }) => {
  const dispatch = useDispatch();
  const {
    photo,
    name,
    nickname,
    date,
    content,
    image,
    likes,
    comments,
    reposts,
  } = post;

  const [liked, setLiked] = useState(false);
  const [commnted, setComented] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [shared, setShared] = useState(false);
  const [hidecontent, setHidecontent] = useState(false);

  const handleChangeLikes = () => {
    setLiked(!liked);
    dispatch(changeStateLikes(post.id, liked));
  };
  const handleChangeComments = () => {
    setComented(!commnted);
    dispatch(changeStateComments(post.id, commnted));
  };
  const handleChangeReposts = () => {
    setReposted(!reposted);
    dispatch(changeStateReposts(post.id, reposted));
  };
  const handleChangeShare = () => {
    setShared(!shared);
  };
  const handleToggleContent = () => {
    setHidecontent(!hidecontent);
  };

  return (
    <div className="main-conteiner">
      <div>
        <img src={photo} alt={name} className="left-side-img"></img>
      </div>
      <div className="right-side-content">
        <div className="content-tittle">
          <div>
            <span className="autor-name">{name}</span>
            <span className="autor-nickname-date">
              {nickname} {date}
            </span>
          </div>
          <div className="autor-angle-down" onClick={handleToggleContent}>
            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
          </div>
        </div>
        <div className={hidecontent ? "hide" : "show"}>
          <div className="content-main">
            <p className="content-main-title">{content}</p>
            <img src={image} alt={content} className="content-main-img"></img>
          </div>
          <div className="content-footer-icons">
            <div
              className={ commnted ? "comment-icon-active" : "comment-icon"}
              onClick={handleChangeComments}
            >
              <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
              <span> {comments}</span>
            </div>
            <div
              className={reposted ? "repost-icon-active" : "repost-icon"}
              onClick={handleChangeReposts}
            >
              <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>
              <span> {reposts}</span>
            </div>
            <div
              className={liked ? "like-icon-active" : "like-icon"}
              onClick={handleChangeLikes}
            >
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              <span> {likes}</span>
            </div>
            <div
              className={shared ? "share-icon-active" : "share-icon"}
              onClick={handleChangeShare}
            >
              <FontAwesomeIcon icon={faArrowUpFromBracket}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsF;
