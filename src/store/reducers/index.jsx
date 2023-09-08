import { combineReducers } from "redux";
import authReducer from "./authReducer";
import authRecReducer from "./authRecReducer";
import profilePortfolio from "./profilePortfolio";
import getProfileEditWorker from "./getProfileEditWorker";
import putProfileEditWorker from "./putProfileEditWorker";
import postPortoReducer from "./postPortoReducers";
import putSkillReducer from "./putSkillReducer";
import getSkillReducer from "./getSkillReducer";
import profileHire from "./porfileHire";
import postExpReducer from "./postExpReducer";
import getExpReducer from "./getExpReducer";
import deleteExpReducer from "./deleteExpReducer";
import putExpReducer from "./putExpReducer";
import getExpUsersReducers from "./getExpUsersReducers";

const rootReducer = combineReducers({
    authReducer,
    authRecReducer,
    profilePortfolio,
    getProfileEditWorker,
    putProfileEditWorker,
    postExpReducer,
    postPortoReducer,
    putSkillReducer,
    profileHire,
    getSkillReducer,
    getExpReducer,
    deleteExpReducer,
    putExpReducer,
    getExpUsersReducers,
});

export default rootReducer;
