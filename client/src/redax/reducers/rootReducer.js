import { combineReducers } from "redux";
import { postsReducer } from "./postsRuducer";
import { usersReducer } from "./usersReducer";
import { newsReducer } from "./newsReducer";

export const rootReducer = combineReducers({
  postsReducer,
  usersReducer,
  newsReducer,
});
