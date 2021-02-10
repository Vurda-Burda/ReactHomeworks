import {MESSAGES_CHATS, messagesChats} from '../actions/messagesChatsAction';
export default store => next => action => {

    const dispatch = store.dispatch;
    const messages = store.getState().messagesChatsReducer;
    switch(action.type){
        case MESSAGES_CHATS:
            console.log(1);
            if(action.author === 'me'){
                console.log('need send');
                setTimeout(
                    () => dispatch(messagesChats('I\'m robot', 'robot', action.chatId)),
                    1000
                );
            }
            break;
    }
    console.log(2);
    return next(action);
};