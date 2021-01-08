import React from "react";

//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Example from "./Example.jsx";
import Message from "./Message.jsx";
import MessageList from "./MessageList.jsx";
import SendMessage from "./SendMessage.jsx";
import ChatPage from "./ChatPage";
import Profile from "./Profile"; 

import "../styles/App.css";
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "",
            messages: [],
            timeOut: null,
            textProfile: "This registration page"
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
            return;
        };
    }

    hideNav = () => {
        document.querySelector(".nav").style.display = "none";
    }

    showNav = () => {
        document.querySelector(".nav").style.display = "flex";
    }

 

    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]});
    }    

    render() {

        return <main className="main">  
            <BrowserRouter>
            <header>
                <Link className="profile" to="/Profile" onClick={this.hideNav}>Profile</Link>
                </header>
            <nav className="nav">
               <Link to="/chat/1">Chat №1</Link>
               <Link to="/chat/2">Chat №2</Link>
               <Link to="/chat/3">Chat №3</Link>
               <Link to="/chat/4">Chat №4</Link>
            </nav>
            <div className="chat">
            <Switch>
                <Route exact path="/" component={ChatPage}/>
                <Route path="/chat/:chatId" render={obj => <ChatPage chatId={Number(obj.match.params.chatId)}/>}/>
                <Route path="/"><Profile textProfile={this.state.textProfile}/></Route>
            </Switch>
            </div>
            <footer>
                <Link className="back" to="" onClick={this.showNav}>Back</Link>
            </footer>
            </BrowserRouter>
            </main>
            
    }
};
