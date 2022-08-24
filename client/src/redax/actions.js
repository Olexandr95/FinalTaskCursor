import {
  CREATE_POST,
  INC_DEC_COMENTS,
  INC_DEC_LIKES,
  INC_DEC_REPOST,
  ADD_USER,
  GET_USERS,
} from "./types";
import axios from "axios";

export function createPost(id, text, image, photo, name, nickname) {
  return {
    type: CREATE_POST,
    post: {
      id,
      photo,
      name,
      nickname,
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/").toString(),
      content: text,
      image: image,
      likes: 0,
      comments: 0,
      reposts: 0,
    },
  };
}

export function changeStateLikes(id, liked) {
  return {
    type: INC_DEC_LIKES,
    payload: {
      id,
      liked,
    },
  };
}

export function changeStateComments(id, commnted) {
  return {
    type: INC_DEC_COMENTS,
    payload: {
      id,
      commnted,
    },
  };
}

export function changeStateReposts(id, reposted) {
  return {
    type: INC_DEC_REPOST,
    payload: {
      id,
      reposted,
    },
  };
}

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
