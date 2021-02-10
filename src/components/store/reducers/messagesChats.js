import {MESSAGES_CHATS} from "../actions/messagesChatsAction";

const innitialStore = {
    messages: [
    ]
};

export default function messagesChatsReducer (store = innitialStore.messages , action) { 
    console.log("message - work"); 
    switch(action.type) {
        case MESSAGES_CHATS:
            console.log(1);
            return [...store, {message: action.message, author: action.author, chatId: action.chatId}];
    default:
        console.log(2);
        return store;
    }
};