import { combineReducers } from 'redux';
import authReducer from './authReducer';
import authRecReducer from './authRecReducer';

const rootReducer = combineReducers({
  authReducer,
  authRecReducer,
});

export default rootReducer;
