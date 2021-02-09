import React from "react";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {testText} from "./store/actions/testActions";

class Profile extends React.Component {

    state = {
        authorMessage: ""
    }

    static defaultProps = {
        textStore: "Error!"
    }

    inputValueName = (e) => {
        this.setState({authorMessage: e.target.value});      
    }

    addAuthorNameNessage = () => {
        this.props.textStore.text = this.state.authorMessage;
        this.setState({});
    }

    // aaa = () => {
    //     let fs = require("fs");
    //     fs.readFileSync("../../dist/api/authorProfile.json");
    //     console.log(fs);
    // }



    componentDidMount () {
        fetch('/api/authorProfile.json')
        .then(response => response.json())
        .then(json_data => {console.log(json_data.text)
            this.props.textStore.text =  json_data.text;
            this.setState({});
        });
    }


    render () {
        return <div>
            <h1 style={{width: "100%", display: "block", margin: "40%", fontSize: "40px"}}>{this.props.textStore.text}</h1>
            <input type="text" onChange={this.inputValueName}/>
            <button onClick={this.addAuthorNameNessage}>Enter your name</button>
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