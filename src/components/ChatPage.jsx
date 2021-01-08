import React from "react";
import PropTypes from "prop-types";

import MessageList from "./MessageList";
import SendMessage from "./SendMessage";


export default class ChatPage extends React.Component {
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

    componentDidUpdate(prevProps, prevState){
        if(prevState.messages.length < this.state.messages.length && this.state.messages[this.state.messages.length-1].author === "me"){
            const timeout = setTimeout(
                () => {
                    this.setState({messages: [...this.state.messages, {message: 'I do not answer you. I am robot', author: 'robot'}]});
                },
                10
            );
        } else {
            return;
        };
    }
    


    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]});
        setTimeout(() => console.log(this.state.messages),
         1000);   
    }    


    render() {
        return <>
            <h1>Number chat - {this.chatSelected()}</h1> 
            <MessageList messages={this.state.messages}/>
            <SendMessage send={this.send} chatId={this.props.chatId}/>
            </>
    }


};
