import { combineReducers } from "redux";
import authReducer from "./auth";

// combine mutliple reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
