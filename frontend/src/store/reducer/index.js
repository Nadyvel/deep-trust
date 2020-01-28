import { combineReducers } from 'redux';
import psychologistsReducer from "./psychologistsReducer";
import loginReducer from './loginReducer';
//import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
    loginReducer,
    psychologistsReducer,
});

export default rootReducer