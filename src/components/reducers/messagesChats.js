import {MESSAGES_CHATS} from "../actions/messagesChatsAction";

const innitialStore = {
    messages: []
};

export default function messagesChatsReducer (store = innitialStore , action) {
    switch(action.type) {
        case MESSAGES_CHATS:
            return action.messages;
    default:
        return store;
    }
};