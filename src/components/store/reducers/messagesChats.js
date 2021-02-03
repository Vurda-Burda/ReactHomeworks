import {MESSAGES_CHATS} from "../actions/messagesChatsAction";

const innitialStore = {
    messages: [
    ]
};

export default function messagesChatsReducer (store = innitialStore , action) { 
    console.log("message - work"); 
    switch(action.type) {
        case MESSAGES_CHATS:
            return [...store, {message: action.message, author: action.author, chatId: action.chatId}];
    default:
        return store;
    }
};