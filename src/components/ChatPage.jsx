import React from "react";
import PropTypes from "prop-types";

import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

import {connect} from "react-redux";
import {messagesChats} from "./store/actions/messagesChatsAction";


class ChatPage extends React.Component {
    state = {
        messages: [],
        infoТext: "no chat selected"
    }


    static propTypes = {
        chatId: PropTypes.number
    }

    static defaultProps = {
        chatId: 0
    }

    chatSelected = () => {
        if(this.props.chatId === 0) {
             return this.state.infoТext;
        } else {
            return this.props.chatId;
        };
    }

    send = objMsg => {
        this.setState({messagesChatsStore:  this.props.messagesChatsStore.push(objMsg)}, () => this.setState( () => this.props.messagesChatsStore.push({message: 'I do not answer you. I am robot', author: 'robot', chatId: this.props.chatId})));
     
    } 
    

    
    render() {

         

        return <>
            <h1>Number chat - {this.chatSelected()}</h1> 
            <MessageList messages={this.props.messagesChatsStore.filter((e) => e.chatId === this.props.chatId)}/>
            <SendMessage send={this.send} chatId={this.props.chatId}/>
            </>
    }


};
const mapStateToProps = store => ({  
    messagesChatsStore: store.messagesChatsReducer.messages
});

const mapDispatchToProps = {
    messagesChats: messagesChats
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
