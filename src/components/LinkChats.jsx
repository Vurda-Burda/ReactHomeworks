import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {linkChats} from "./actions/linkChatsAction";

import "../styles/App.css";


class LinkChats extends React.Component {

    state = {
        newChatNumber: null
    }

    // static propTypes = {
    //     linkChats: PropTypes.array
    // }


    static defaultProps = {
        linkChatsStore: [1]
    };

    

    inputValueNumber = (e) => {
        return this.newChatNumber = e.target.value;       
    }

    addNewChat = () => {
    
        if (this.props.linkChatsStore.includes(Number(this.newChatNumber))) {
            alert("Такой чат уже существует!!!");
            console.log("repeat chat number");
        } else if (Number(this.newChatNumber) < 0 || !Number.isInteger(Number(this.newChatNumber))) {
            alert("Не корректное значение!!!");
            console.log("incorrect value chat number");
        } else {
            this.props.linkChatsStore.push(Number(this.newChatNumber));
            this.setState({newChatNumber: this.newChatNumber}, () => console.log(this.props.linkChatsStore));
        };
    }

    render () {
        const drawLinkChats = this.props.linkChatsStore.map((chatNumber) => <Link key={chatNumber} to={`/chat/${chatNumber}`}>Chat №{chatNumber}</Link>);

        return <nav className="nav">
            {drawLinkChats}
        <input type="number" onChange={this.inputValueNumber}/>
        <button onClick={this.addNewChat} >Add new chat</button>
     </nav>;
    }
};

const mapStateToProps = store => ({  
    linkChatsStore: store.linkChatsReducer.links
});

const mapDispatchToProps = {
    linkChats: linkChats,
};

export default connect(mapStateToProps, mapDispatchToProps)(LinkChats);
