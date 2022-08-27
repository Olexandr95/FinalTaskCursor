import { ADD_NEW, GET_NEWS, EDIT_NEW, DEL_NEWS } from "../types/newsTypes";

const initualState = {
  news: [],
};

export const newsReducer = (state = initualState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NEW:
      return {
        ...state,
        news: [action.new, ...state.news],
      };
    case GET_NEWS: {
      return { ...state, news: payload.reverse() };
    }
    case EDIT_NEW:
      return {
        ...state,
        news: [action.new, ...state.news],
      };
    case DEL_NEWS:
      return {
        ...state,
        news: [action.new, ...state.news],
      };
    default:
      return state;
  }
};

export const newsSelector = (state) => state.newsReducer.news;
