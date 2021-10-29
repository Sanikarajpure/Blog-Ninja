import { SET_BLOG } from "./types";

export const set_Blog = (blog) => {
  return {
    type: SET_BLOG,
    payload: {
      id: new Date().getTime().toString(),
      data: blog,
    },
  };
};
