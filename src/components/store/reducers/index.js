import { combineReducers } from 'redux';
import {connectRouter} from "connected-react-router";

import textReducer from "./testText";
import linkChatsReducer from "./linkChats";
import messagesChatsReducer from "./messagesChats";


export default history => combineReducers({
    router: connectRouter(history),
    textReducer,
    linkChatsReducer,
    messagesChatsReducer
});
