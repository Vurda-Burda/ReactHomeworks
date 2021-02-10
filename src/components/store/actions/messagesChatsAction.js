export const MESSAGES_CHATS = "MESSAGES_CHATS";

export const messagesChats = (message, author, chatId) => ({
    type: MESSAGES_CHATS,
    message,
    author,
    chatId
});