import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App.jsx';

//const App = React.createElement('main', {className: 'main'}, 'Hello');

ReactDom.render(
    <App/>,
    document.getElementById('app')
);

/*
const obj = "Привет";
console.log(obj);

import optionDefault from './helper';
import { practice2 } from './helper';

optionDefault ();
practice2 ();
*/