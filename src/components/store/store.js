import { createStore, applyMiddleware, compose } from 'redux';

import initReducers from './reducers';
import middlewares from './middlewares';

import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'meMessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messagesChatsReducer', 'linkChatsReducer']
 
}

export const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, initReducers(history))

export default function initStore() {
    const innitialStore = {};
    const store = createStore(
        persistedReducer,
        innitialStore,
        compose(
             applyMiddleware(routerMiddleware(history), ...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        )
    )

    const persistor = persistStore(store);
    console.log(persistor);

    return { store, persistor };
};
