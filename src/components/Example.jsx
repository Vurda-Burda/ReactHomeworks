import React, { createElement } from "react";
import { render } from "react-dom";

import Message from "./Message.jsx";

export default class Example extends React.Component {
    state = {
        count: 1,
        countQuantityClick: [],
        countNull: 0,
        text: "",
        inputText: "",
        autorName: "",
        numberAnswer: 0,
        messageBox: []
      }

    click = () => {
        this.setState({count: this.state.count + 1});
        this.state.countQuantityClick.push(this.state.count);
        this.state.countNull = this.state.countQuantityClick;
    }

    change = (e) => {
        this.setState({text: e.target.value});
    }

    clickButton = (e) => {
        this.setState({numberAnswer: this.state.numberAnswer + 1});
        console.log(this.state.numberAnswer);
        this.setState({inputText: this.state.inputText = this.state.text});
        const textMessage = `<div class="textPush$">${this.state.inputText}</div>`;
        document.querySelector(".innerMessage").insertAdjacentHTML("beforeend", textMessage);
        this.setState({autorName: this.state.autorName = "undefined"})
        const autor = `<span>Autor text - ${this.state.autorName}</span>`;
        document.querySelector(".innerMessage").insertAdjacentHTML("beforeend", autor);
        this.state.messageBox.push(this.state.text);
        
    }

    componentDidUpdate () {
        if(this.state.messageBox.length % 2) {
            this.state.messageBox.push("robot");
            return document.querySelector(".innerMessage").insertAdjacentHTML("beforeend", `<div>Answer robot</div>`);
            
        } else {
            console.log(false);
        };  
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut);
        this.setState({timeOut: null});
    }

    



    render() {
        return <div>
            <Message text={`Count quantity click - ${this.state.countNull}`}/>
            <button onClick={this.click}>+ count quantitu</button>
            <br/>
            <Message text={this.state.text}/>
            <br/>
            <input value={this.state.text} onChange={this.change}/>
            <br/>
            <button onClick={this.clickButton}>Push message</button>
            <br/>
             <div class="innerMessage"></div>
        </div>;
    }
};