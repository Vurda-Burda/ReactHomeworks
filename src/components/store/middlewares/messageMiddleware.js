
import {MESSAGES_CHATS, messagesChats} from "../../actions/messagesChatsAction";
import store from "../store";

// export default  store => next=> action => {
//     console.log(next.getState().messagesChatsReducer);
//     switch(action.type){
//         case MESSAGES_CHATS:
//             if(next.getState().messagesChatsReducer){
//                 console.log('need send');
//             }
//             break;
//     }
//     return next => {action};
// };

let ping = function ping(store) {
    return function (next) {
      return function (action) {
        console.log(store.action);
        return next(action);
      }
    }
};

export default ping();