import {combineReducers} from 'redux';
import NewUserReducer  from "./NewUserReducer";

export default combineReducers({
    newUser: NewUserReducer,
});