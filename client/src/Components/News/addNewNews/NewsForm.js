import React, { useState, useEffect } from "react";
import "./news.scss";
import { v4 as uuid } from "uuid";
import { saveNew, getApiNews } from "../../../redax/actions/newsActions";
import { useSelector, useDispatch } from "react-redux";
import { newsSelector } from "../../../redax/reducers/newsReducer";
import { Stack, TextField, Box, Typography, Button } from "@mui/material";
import { CssTextField } from "../../TextField/textField";

const NewsForm = () => {
  const [autName, setAutName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const id = uuid();
  const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/").toString();

  const dispatch = useDispatch();

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

    const news = {
      id,
      autName,
      title,
      content,
      image,
      date,
    };

    dispatch(saveNew("http://localhost:4004/news", news));
    dispatch(getApiNews("http://localhost:4004/news", news));
  };

  useEffect(() => {
    dispatch(getApiNews("http://localhost:4004/news"));
  }, []);
  return (
    <div className="conteiner-user">
      <Stack>
        <Box width="300px">
          <div className="tittle">
            <Typography>News Form</Typography>
          </div>

          <Stack spacing={2}>
            <CssTextField
              label="Autor Name"
              variant="outlined"
              required
              value={autName}
              onChange={handleSelectName}
              color={!autName.trim() ? "primary" : "success"}
              sx={{ textColor: "white" }}
            />
            <CssTextField
              label="Title"
              variant="outlined"
              required
              value={title}
              onChange={handleSelectTitle}
              color={!title.trim() ? "primary" : "success"}
            />
            <CssTextField
              label="Content text"
              variant="outlined"
              required
              value={content}
              onChange={handleSelectContent}
              color={!content.trim() ? "primary" : "success"}
            />
            <CssTextField
              label="URL news photo"
              variant="outlined"
              required
              value={image}
              onChange={handleSelectPhoto}
              color={!image.trim() ? "primary" : "success"}
            />
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Create New
            </Button>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default NewsForm;
