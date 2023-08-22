import { combineReducers } from "redux";
import authReducer from "./authReducer";
import authRecReducer from "./authRecReducer";
import profilePortfolio from "./profilePortfolio";
import getProfileEditWorker from "./getProfileEditWorker";
import putProfileEditWorker from "./putProfileEditWorker";
import postExpReducer from "./postExpReducer";
import postPortoReducer from "./postPortoReducers";
import postSkillReducer from "./postSkillReducer";

const rootReducer = combineReducers({
    authReducer,
    authRecReducer,
    profilePortfolio,
    getProfileEditWorker,
    putProfileEditWorker,
    postExpReducer,
    postPortoReducer,
    postSkillReducer
});

export default rootReducer;
