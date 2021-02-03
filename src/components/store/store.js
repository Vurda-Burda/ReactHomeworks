import { createStore, applyMiddleware, compose } from 'redux';
// import { compose } from "compose";
import reducers from './reducers';
// import middlewares from './middlewares';

import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";

export const history = createBrowserHistory();

export default function initStore() {

    const store = createStore(
        reducers(history),
        {},
        compose(
             applyMiddleware(routerMiddleware(history)),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        )
    )
    return store;
};
