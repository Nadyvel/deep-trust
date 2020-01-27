import { combineReducers } from 'redux';
//import userPostsReducer from "./userPostsReducer";
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    loginReducer,
    //userPostsReducer
});

export default rootReducer