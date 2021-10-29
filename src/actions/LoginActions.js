import { SET_USER, LOGOUT_USER } from "./types";

export const set_User = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const logout_user = (data) => {
  return {
    type: LOGOUT_USER,
    payload: data,
  };
};
