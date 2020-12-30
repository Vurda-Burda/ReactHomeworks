import React from "react";
import PropTypes from "prop-types";
import Message from "./Message.jsx";

export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.array
    };

    static defaultProps = {
        messages: []
    };
    
    render() {
        return <div>
            { this.props.messages.map((value, index) => {
                return <><Message text={value} key={index}/><br/></>;
            }
            )}
        </div>;
    };
};