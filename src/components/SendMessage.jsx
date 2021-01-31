import React from "react";
import PropTypes from "prop-types";

import { TextField } from '@material-ui/core';
import  { Button } from "@material-ui/core";
export default class SendMessage extends React.Component {
    state = {
        message: "",
        chatNumber: ""
    };

    static propTypes = {
        send: PropTypes.func.isRequired,
        chatId: PropTypes.number 
    };


    send = () => {
        this.props.send({message: this.state.message, author: 'me', chatId: this.props.chatId});
        this.setState({message: ""});
    };

    handleChange = (e) => this.setState({message: e.target.value});

    
    render () {
        return <div>
            <TextField value={this.state.message}
                       onChange={this.handleChange}
                       multiline={true}
                       fullWidth={true}
                       name={'message'}/>
            <Button onClick={this.send}>Send message</Button>
            </div>
    };

};