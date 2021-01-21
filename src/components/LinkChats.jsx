import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles/App.css";


export default class LinkChats extends React.Component {

    state = {
        newChatNumber: null
    }

    static propTypes = {
        linkChats: PropTypes.array
    }


    static defaultProps = {
        linkChats: [1]
    };

    

    inputValueNumber = (e) => {
        this.newChatNumber = e.target.value;       
    }

    addNewChat = () => {
    
        if (this.props.linkChats.includes(Number(this.newChatNumber))) {
            alert("Такой чат уже существует!!!");
            console.log("repeat chat number");
        } else if (Number(this.newChatNumber) < 0 || !Number.isInteger(Number(this.newChatNumber))) {
            alert("Не корректное значение!!!");
            console.log("incorrect value chat number");
        } else {
            this.props.linkChats.push(Number(this.newChatNumber));
            this.setState({newChatNumber: this.newChatNumber}, () => console.log(this.props.linkChats));
        };
    }



    render () {
        const drawLinkChats = this.props.linkChats.map((chatNumber) => <Link key={chatNumber} to={`/chat/${chatNumber}`}>Chat №{chatNumber}</Link>);

        return <nav className="nav">
            {drawLinkChats}
        <input type="number" onChange={this.inputValueNumber}/>
        <button onClick={this.addNewChat} >Add new chat</button>
     </nav>;
    }
};
