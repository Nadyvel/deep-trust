import { combineReducers } from 'redux';
import psychologistsReducer from "./psychologistsReducer";
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    loginReducer,
    psychologistsReducer,
});

export default rootReducer