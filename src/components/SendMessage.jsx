import React from "react";
import PropTypes from "prop-types";

import TextField from 'material-ui/TextField';

import  FlatButton from "material-ui/FlatButton"

export default class SendMessage extends React.Component {
    state = {
        message: ""
    };

    static propTypes = {
        send: PropTypes.func.isRequired
    };


    send = () => {
        this.props.send({message: this.state.message, author: 'me'});
        this.setState({message: ""});
    };

    handleChange = (e) => this.setState({message: e.target.value});

    
    render () {
        return <div>
            <TextField value={this.state.message}
                       onChange={this.handleChange}
                       fullWidth={true}
                       multiline={true} 
                       name={'message'}/>
            <FlatButton onClick={this.send}>Send message</FlatButton>
            </div>
    };

};