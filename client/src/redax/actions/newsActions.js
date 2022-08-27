import { ADD_NEW, GET_NEWS, DEL_NEWS } from "../types/newsTypes";
import axios from "axios";

export const addNew = (news) => {
  return {
    type: ADD_NEW,
    news: [...state.news, action.payload],
  };
};
export const delNew = (news) => {
  return {
    type: DEL_NEWS,
    payload: [...state.news, action.payload],
  };
};
export const getNews = (news) => {
  return {
    type: GET_NEWS,
    payload: news,
  };
};

export const saveNew = (url, news) => {
  return (dispatch) => {
    axios.post(url, news).then(({ data }) => dispatch(addNew(data)));
  };
};

export const updateApiNews = (url, data) => {
  return (dispatch) => {
    axios.put(url, data).then(({ data }) => dispatch(getNews(data)));
  };
};
export const deleteApiNews = (url) => {
  return (dispatch) => {
    axios.delete(url).then(({ data }) => dispatch(delNew(data)));
  };
};
export const getApiNews = (url) => {
  return (dispatch) => {
    axios.get(url).then(({ data }) => dispatch(getNews(data)));
  };
};
