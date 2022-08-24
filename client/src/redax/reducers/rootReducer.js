import { combineReducers } from "redux";
import { postsReducer, } from "./postsRuducer";
import {usersReducer} from './usersReducer'

export const rootReducer = combineReducers({
  postsReducer,
  usersReducer,
});
