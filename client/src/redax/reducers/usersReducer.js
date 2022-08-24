import { ADD_USER, GET_USERS } from "../types/usersTypes"

const initualState = {
  users: [],
};

export const usersReducer = (state = initualState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        users: [action.user, ...state.users],
      };
    case GET_USERS: {
      return { ...state, users: payload.reverse() };
    }
    default:
      return state;
  }
};

export const UsersSelector = (state) => state.usersReducer.users;
