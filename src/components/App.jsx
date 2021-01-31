import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Example from "./Example.jsx";
import Message from "./Message.jsx";
import MessageList from "./MessageList.jsx";
import SendMessage from "./SendMessage.jsx";
import ChatPage from "./ChatPage";
import Profile from "./Profile"; 
import Router from "./Router"
import { Provider } from 'react-redux';
import initStore from "./store/store";
import LinkChats from "./LinkChats";

import "../styles/App.css";
export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "",
            messages: [],
            timeOut: null,
            textProfile: "This registration page"
            // linkChats: [
            //     1,
            //     2,
            //     3,
            //     4
            // ]
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

    // componentDidUpdate(){
    //     if(this.state.messages.length % 2 && this.state.messages[this.state.messages.length-1].author === "me"){
    //         const timeout = setTimeout(
    //             () => {
    //                 this.setState({messages: [...this.state.messages, {message: 'I do not answer you. I am robot', author: 'robot'}]});
    //             },
    //             10
    //         );
    //     } else {
    //         return;
    //     };
    // }

    hideNav = () => {
        document.querySelector(".nav").style.display = "none";
    }

    showNav = () => {
        document.querySelector(".nav").style.display = "flex";
    }

 

    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]}, () => console.log(this.state.messages));
    }    

    render() {

        return  <main className="main">
            <Provider store={initStore()}>   
            <BrowserRouter>
            <header>
                <Link className="profile" to="/Profile" onClick={this.hideNav}>Profile</Link>
            </header>
                <LinkChats linkChats={this.state.linkChats}/>
            <div className="chat">
                <Router/>
            </div>
            <footer>
                <Link className="back" to="" onClick={this.showNav}>Back</Link>
            </footer>
            </BrowserRouter>
            </Provider>
            </main>
            
    }
};
