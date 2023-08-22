import { combineReducers } from "redux";
import authReducer from "./authReducer";
import authRecReducer from "./authRecReducer";
import profilePortfolio from "./profilePortfolio";
import profileHire from "./porfileHire";

const rootReducer = combineReducers({
  authReducer,
  authRecReducer,
  profilePortfolio,
  profileHire,
});

export default rootReducer;
