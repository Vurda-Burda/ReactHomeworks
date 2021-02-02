import {MESSAGES_CHATS} from "../actions/messagesChatsAction";

const innitialStore = {
    messages: [
        {message: "dwd", author: "me", chatId: 0}
    ]
};

export default function messagesChatsReducer (store = innitialStore , action) {  
    switch(action.type) {
        case MESSAGES_CHATS:
            return action.messages;
    default:
        return store;
    }
};