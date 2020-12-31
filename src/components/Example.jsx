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
        numberAnswer: ""
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
        this.setState({count: this.state.numberAnswer + 1});
        console.log(this.state.numberAnswer);
        this.setState({inputText: this.state.inputText = this.state.text});
        const textMessage = `<div class="textPush">${this.state.inputText}</div>`;
        document.querySelector(".innerMessage").insertAdjacentHTML("beforeend", textMessage);
        this.setState({autorName: this.state.autorName = "undefined"})
        const autor = `<span>Autor text - ${this.state.autorName}</span>`;
        document.querySelector(".innerMessage").insertAdjacentHTML("beforeend", autor);
    }
/*
    sendAutoMessage = () => {
        const sendMessage = `<div>Answer robot</div>`;
        document.querySelector(".textPush").insertAdjacentHTML("afterend", sendMessage);
    }
*/
    componentDidUpdate () {
      const timeOut = setTimeout(
        () => {
            document.querySelector(".textPush").insertAdjacentHTML("afterend", `<div>Answer robot</div>`);
              },
              100
              );
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