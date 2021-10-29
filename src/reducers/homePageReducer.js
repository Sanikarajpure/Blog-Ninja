import { SET_BLOG } from "../actions/types";

const blog = [];

const HomePageReducer = (state = { blog: blog }, action) => {
  switch (action.type) {
    case SET_BLOG:
      const { id, data } = action.payload;

      return {
        ...state,
        blog: [
          ...state.blog,
          {
            id: id,
            data: data,
          },
        ],
      };
    default:
      return state;
  }
};

export default HomePageReducer;
