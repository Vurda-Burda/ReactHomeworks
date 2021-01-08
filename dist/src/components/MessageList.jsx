import React from "react";
import PropTypes from "prop-types";
import Message from "./Message.jsx";

import "../styles/MessageList.css"
export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.array,
        chatId: PropTypes.number 
    };

    static defaultProps = {
        messages: []
    };
    
    render() {
        return <div className={"messages"}>
            { this.props.messages.map(({message, author, chatId}, index) => <React.Fragment key={index}><Message message={message} author={author} chatId={chatId}/><br/></React.Fragment>) }
        </div>;
    };
};