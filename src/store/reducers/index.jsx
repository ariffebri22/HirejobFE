import { combineReducers } from "redux";
import authRecReducer from "./authRecReducer";

const rootReducers = combineReducers({
  authRecReducer,
});

export default rootReducers;
