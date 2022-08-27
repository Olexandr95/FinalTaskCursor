import React, { useState, useEffect } from "react";
import "./users.scss";
import { v4 as uuid } from "uuid";
import { saveUser, getApiUsers } from "../../../redax/actions/usersActions";
import { useSelector, useDispatch } from "react-redux";
import { UsersSelector } from "../../../redax/reducers/usersReducer";
import { Stack, Box, Typography, Button } from "@mui/material";
import { CssTextField } from "../../TextField/textField";

const UserForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputNickName, setInputNickName] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");

  const cleanedInputs = () => {
    setInputName("");
    setInputNickName("");
    setInputPhoto("");
  };

  const users = useSelector(UsersSelector);
  const id = uuid();
  const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/").toString();

  const dispatch = useDispatch();

  const handleSelectName = (e) => {
    setInputName(e.target.value);
  };
  const handleSelectPhoto = (e) => {
    setInputPhoto(e.target.value);
  };
  const handleSelectNickName = (e) => {
    setInputNickName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id,
      inputName,
      inputNickName,
      inputPhoto,
      date,
    };

    dispatch(saveUser("http://localhost:4004/users", user));
    dispatch(getApiUsers("http://localhost:4004/users", user));
    cleanedInputs();
  };

  useEffect(() => {
    dispatch(getApiUsers("http://localhost:4004/users"));
  }, []);
  return (
    <div className="conteiner-user">
      <Stack>
        <Box width="300px">
          <div className="tittle">
            <Typography>User Form</Typography>
          </div>

          <Stack spacing={2}>
            <CssTextField
              label="User Name"
              variant="outlined"
              required
              value={inputName}
              onChange={handleSelectName}
              color={!inputName.trim() ? "primary" : "success"}
            />

            <CssTextField
              label="Nickname"
              variant="outlined"
              required
              value={inputNickName}
              onChange={handleSelectNickName}
              color={!inputNickName.trim() ? "primary" : "success"}
            />
            <CssTextField
              label="URL user photo"
              variant="outlined"
              required
              value={inputPhoto}
              onChange={handleSelectPhoto}
              color={!inputPhoto.trim() ? "primary" : "success"}
            />
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Create User
            </Button>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
};

export default UserForm;
