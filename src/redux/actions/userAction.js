import { SET_USER, LOG_OUT_USER } from "./actionTypes";

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData,
  };
};

export const logoutUser = () => {
  return {
    type: LOG_OUT_USER,
    payload: null,
  };
};
