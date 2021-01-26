import { combineReducers } from 'redux';
import textReducer from "./testText";
import linkChatsReducer from "./linkChats";

export default combineReducers({
    textReducer,
    linkChatsReducer
});
