import { combineReducers } from 'redux';
import psychologistsReducer from "./psychologistsReducer";
import loginReducer from './loginReducer';
import modalReducer from './modalReducer';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    loginReducer,
    psychologistsReducer,
    modalReducer,
    userReducer,
});

export default rootReducer