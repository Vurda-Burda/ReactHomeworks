import React from "react";
import { Link } from "react-router-dom";

import "../styles/App.css";


export default class LinkChats extends React.Component {

    static defaultProps = {
        linkChats: [1]
    };

    render () {
        return <nav className="nav">
        <Link to="/chat/1">Chat №1</Link>
        <Link to="/chat/2">Chat №2</Link>
        <Link to="/chat/3">Chat №3</Link>
        <Link to="/chat/4">Chat №4</Link>
        <input type="number"/>
        <button>Add new chat</button>
     </nav>;
    }
};
