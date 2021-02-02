import { createStore, applyMiddleware, compose } from 'redux';
// import { compose } from "compose";
import reducers from '../reducers';
import middlewares from './middlewares';

export default function initStore() {
       const innitialStore = {};
       return createStore(
       reducers,
       {},
       compose(
           applyMiddleware(...middlewares),
           window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
       )
   )
        // const store = createStore(
        //     reducers,
        //     applyMiddleware(...middlewares)
        // );
        // store.subscribe(() => console.log(store.getState()));
        // return store;
};
