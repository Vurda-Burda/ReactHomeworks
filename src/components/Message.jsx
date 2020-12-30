import React from "react"; 
import PropTypes from "prop-types";
/*
const Message = ({ text })=> {
    return <span>{ text }</span>;
};
*/
export default class Message extends React.Component {
    static proptypes = {
        text: PropTypes.string.isRequired
    };

    render() {
        return <span>{this.props.text}</span>
    }

};
