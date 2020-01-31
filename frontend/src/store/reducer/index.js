import { combineReducers } from 'redux';
import psychologistsReducer from "./psychologistsReducer";
import loginReducer from './loginReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    loginReducer,
    psychologistsReducer,
    modalReducer
});

export default rootReducer