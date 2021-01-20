import React from "react";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {testText} from "./actions/testActions";


class Profile extends React.Component {

    static defaultProps = {
        textStore: "Error!"
    }
   
    render () {
        return <div>
            <h1 style={{width: "100%", display: "block", margin: "40%", fontSize: "40px"}}>{this.props.textStore.text}</h1>
        </div>
    }
};

const mapStateToProps = store => ({
    textStore: store.textReducer
});

const mapDispatchToProps = {
    testText: testText
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);