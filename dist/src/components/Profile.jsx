import React from "react";
import PropTypes from "prop-types";



export default class Profile extends React.Component {
   
    render () {
        return <div>
            <h1 textextProfile={this.props.textProfile} style={{width: "100%", display: "block", margin: "40%", fontSize: "40px"}}>{this.props.textProfile}</h1>
        </div>
    };

};