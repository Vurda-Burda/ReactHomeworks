import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Example from "./Example.jsx";
import Message from "./Message.jsx";
import MessageList from "./MessageList.jsx";
import SendMessage from "./SendMessage.jsx";
import ChatPage from "./ChatPage";

import "../styles/App.css";
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chatId: "",
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
        if(this.state.messages.length % 2 && this.state.messages[this.state.messages.length-1].author === "me"){
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

 

    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]});
        console.log(this.state.messages);
    
    }    

    render() {
        return <MuiThemeProvider> 
        <main className="main">  
            <BrowserRouter>
            <nav>
               <Link to="/chat/1">Chat №1</Link>
               <Link to="/chat/2">Chat №2</Link>
               <Link to="/chat/3">Chat №3</Link>
               <Link to="/chat/4">Chat №4</Link>
            </nav>
            <div className="chat">
            <Switch>
                <Route exact path="/" component={ChatPage}/>
                <Route path="/chat/:chatId" render={obj => <ChatPage chatId={obj.match.params.chatId}/>}/>
            </Switch>
            </div>
            </BrowserRouter>
            </main>
            </MuiThemeProvider>;
    }
};
