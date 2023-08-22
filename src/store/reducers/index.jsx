import { combineReducers } from "redux";
import authReducer from "./authReducer";
import authRecReducer from "./authRecReducer";
import profilePortfolio from "./profilePortfolio";

const rootReducer = combineReducers({
    authReducer,
    authRecReducer,
    profilePortfolio,
});

export default rootReducer;
