import { persistReducer } from "redux-persist";
import HomePageReducer from "./homePageReducer";
import LoginReducer from "./loginReducer";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["Home", "Login"],
  blackList: [],
};

const rootReducer = combineReducers({
  Home: HomePageReducer,
  Login: LoginReducer,
});

export default persistReducer(persistConfig, rootReducer);
