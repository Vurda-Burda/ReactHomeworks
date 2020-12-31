import React from "react";
import Example from "./Example.jsx";
import Message from "./Message.jsx";
import MessageList from "./MessageList.jsx";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "Hello",
            messages: ["Привет", "Hello", "Guten Tag"]
        };
    }

    componentDidMount() {
        const timeOut = setTimeout(
            () => {
                this.setState({text: "Hello World!"});
                  },
                  2000
        );
        this.setState({timeOut});
    }

    componentDidUpdate() {
        console.dir("ok");
    }

    componentWillUnmount() {
        clearTimeout(this.state.timeOut);
        this.setState({timeOut: null});
    }

    render() {
        return <main class="main">
            <MessageList messages={this.state.messages}/>
            <Message text={this.state.text}/>
            <Example/>
            </main>;
    }
};
