import { ADD_USER, GET_USERS, DEL_USER } from "../types/usersTypes";
import axios from "axios";

export const addUser = (users) => {
  return {
    type: ADD_USER,
    users: [...state.users, action.payload],
  };
};

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    payload: users,
  };
};

export const delUser = (users) => {
  return {
    type: DEL_USER,
    payload: [...state.users, action.payload],
  };
};
export const saveUser = (url, user) => {
  return (dispatch) => {
    axios.post(url, user).then(({ data }) => dispatch(addUser(data)));
  };
};

export const getApiUsers = (url) => {
  return (dispatch) => {
    axios.get(url).then(({ data }) => dispatch(getUsers(data)));
  };
};

export const deleteApiUsers = (url) => {
  return (dispatch) => {
    axios.delete(url).then(({ data }) => dispatch(delUser(data)));
  };
};
