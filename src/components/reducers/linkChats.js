import { LINK_CHATS } from "../actions/linkChatsAction";

const innitialStore = {
    links: [1, 2, 3, 4]
};

export default function linkChatsReducer (store = innitialStore , action) {
    switch(action.type) {
        case LINK_CHATS:
            return action.links;
    default:
        return store;
    }
};