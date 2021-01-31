import { combineReducers } from 'redux';
import textReducer from "./testText";
import linkChatsReducer from "./linkChats";
import messagesChatsReducer from "./messagesChats";

export default combineReducers({
    textReducer,
    linkChatsReducer,
    messagesChatsReducer
});
