import React from "react"; 
import PropTypes from "prop-types";

import styles from "../styles/Message.js";
export default class Message extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    };

    render() {
        return <div style={{...styles.message, alignSelf: this.props.author === 'robot' ? 'flex-end' : 'flex-start'}}>
        <div style={styles.message}>{this.props.message}</div>
        <div style={styles.author}>{this.props.author}</div>
        </div>
    }

};
