import { combineReducers } from "redux";
import authReducer from "./authReducer";
import authRecReducer from "./authRecReducer";
import profilePortfolio from "./profilePortfolio";
import getProfileEditWorker from "./getProfileEditWorker";
import putProfileEditWorker from "./putProfileEditWorker";
import postPortoReducer from "./postPortoReducer";
import putSkillReducer from "./putSkillReducer";
import getSkillReducer from "./getSkillReducer";
import profileHire from "./porfileHire";
import postExpReducer from "./postExpReducer";
import getExpReducer from "./getExpReducer";
import deleteExpReducer from "./deleteExpReducer";
import putExpReducer from "./putExpReducer";
import getExpUsersReducers from "./getExpUsersReducers";
import getPortoReducer from "./getPortoReducer";
import deletePortoReducer from "./deletePortoReducer";
import putPortoReducer from "./putPortoReducer";
import getPortoUsersReducer from "./getPortoUsersReducer";
import getProfileEditRekruter from "./getProfileEditRekruter";
import putProfileEditRekruter from "./putProfileEditRekruter";

const rootReducer = combineReducers({
    authReducer,
    authRecReducer,
    profilePortfolio,
    getProfileEditWorker,
    putProfileEditWorker,
    postExpReducer,
    putSkillReducer,
    profileHire,
    getSkillReducer,
    getExpReducer,
    deleteExpReducer,
    putExpReducer,
    getExpUsersReducers,
    postPortoReducer,
    getPortoReducer,
    deletePortoReducer,
    putPortoReducer,
    getPortoUsersReducer,
    getProfileEditRekruter,
    putProfileEditRekruter,
});

export default rootReducer;
