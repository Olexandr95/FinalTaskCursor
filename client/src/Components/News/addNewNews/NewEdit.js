import React, { useState, useEffect } from "react";
import "./news.scss";
import Header from "../../Header/header";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { updateApiNews } from "../../../redax/actions/newsActions";
import { useSelector, useDispatch } from "react-redux";
import { newsSelector } from "../../../redax/reducers/newsReducer";
import { getApiNews } from "../../../redax/actions/newsActions";
import { Stack, TextField, Box, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const NewsEdit = () => {
  const [autName, setAutName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getApiNews("http://localhost:4004/news"));
  }, []);
  const news = useSelector(newsSelector);
  const dispatch = useDispatch();
  const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/").toString();
  const findedNew = news?.filter((el) => el._id === id);

  useEffect(() => {
    if (news !== null) {
      setAutName(findedNew[0].autName);
      setTitle(findedNew[0].title);
      setContent(findedNew[0].content);
      setImage(findedNew[0].image);
    }
  }, [news]);

  const handleSelectName = (e) => {
    setAutName(e.target.value);
  };
  const handleSelectTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSelectContent = (e) => {
    setContent(e.target.value);
  };
  const handleSelectPhoto = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEdit = {
      id,
      autName,
      title,
      content,
      image,
      date,
    };

    dispatch(updateApiNews(`http://localhost:4004/news/${id}`, newEdit));
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="conteiner-user">
        <Stack>
          <Box width="300px">
            <div className="tittle">
              <Typography>
                {" "}
                <EditIcon /> News Edit
              </Typography>
            </div>

            <Stack spacing={2}>
              <Typography>{autName}</Typography>
              <TextField
                label="Autor Name"
                variant="outlined"
                required
                value={autName}
                onChange={handleSelectName}
                color={!autName.trim() ? "primary" : "success"}
                focused
              />
              <Typography>{title}</Typography>
              <TextField
                label="Title"
                variant="outlined"
                required
                value={title}
                onChange={handleSelectTitle}
                color={!title.trim() ? "primary" : "success"}
                focused
              />
              <Typography>{content}</Typography>
              <TextField
                label="Content text"
                variant="outlined"
                required
                value={content}
                onChange={handleSelectContent}
                color={!content.trim() ? "primary" : "success"}
                focused
              />
              <img src={image} alt={image} style={{ width: "300px" }}></img>
              <TextField
                label="URL news photo"
                variant="outlined"
                required
                value={image}
                onChange={handleSelectPhoto}
                color={!image.trim() ? "primary" : "success"}
                focused
              />
              <Button
                variant="contained"
                color="success"
                onClick={handleSubmit}
              >
                Edit New
              </Button>
            </Stack>
          </Box>
        </Stack>
      </div>
    </>
  );
};

export default NewsEdit;
