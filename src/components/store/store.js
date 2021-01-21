import { createStore } from 'redux';
import reducers from '../reducers';


export default function initStore() {
       const innitialStore = {};
       return createStore(
       reducers,
       {}
   );
};
