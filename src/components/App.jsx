import React from "react";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Example from "./Example.jsx";
import Message from "./Message.jsx";
import MessageList from "./MessageList.jsx";
import SendMessage from "./SendMessage.jsx";

import "../styles/App.css";
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "",
            messages: [],
            timeOut: null,
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        const timeOut = setTimeout(
            () => {
                this.setState({text: "Hello World!"});
                  },
                  2000
        );
        this.setState({timeOut});
    }

    componentDidUpdate(){
        if(this.state.messages.length % 2 && this.send){
            const timeout = setTimeout(
                () => {
                    this.setState({messages: [...this.state.messages, {message: 'I do not answer you. I am robot', author: 'robot'}]});
                },
                10
            );
        } else {
            return console.log("Auto answer works!");
        };
    }

    componentWillUnmount(){
        clearTimeout(this.state.timeout);
        this.setState({timeout: null});
    }

    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]});
        console.log(this.state.messages);
    
    }    

    render() {
        return <MuiThemeProvider> 
        <main className="main">
            <MessageList messages={this.state.messages}/>
            {/*<Message text={this.state.text}/>*/}
            {/*<Example/>*/}
            <SendMessage send={this.send}/>
            </main>
            </MuiThemeProvider>;
    }
};
