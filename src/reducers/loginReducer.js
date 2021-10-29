import { SET_USER, LOGOUT_USER } from "../actions/types";

const user = {
  email: "",
  firstName: "",
  lastName: "",
  city: "",
  isAuth: false,
};
const LoginReducer = (state = { user: user }, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    case LOGOUT_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default LoginReducer;
