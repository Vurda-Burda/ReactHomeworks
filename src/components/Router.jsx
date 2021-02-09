import React from "react";

import { Switch, Route } from "react-router-dom";

import Profile from "./Profile";
import ChatPage from "./ChatPage";




export default class Router extends React.Component {

    render () {
        return <Switch>
        <Route exact path="/" component={ChatPage}/>
        <Route path="/chat/:chatId" render={obj => <ChatPage chatId={Number(obj.match.params.chatId)}/>}/>
        <Route path="/"><Profile/></Route>
    </Switch>;
    }
}