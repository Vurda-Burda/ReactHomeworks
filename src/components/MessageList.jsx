import React from "react";
import PropTypes from "prop-types";
import Message from "./Message.jsx";

import "../styles/MessageList.css"

export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.array
    };

    static defaultProps = {
        messages: []
    };
    
    render() {
        return <div iv className={"messages"}>
            { this.props.messages.map(({message, author}, id) => <><Message message={message} author={author} key={id}/><br/></>) }
        </div>;
    };
};