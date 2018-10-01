import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalState from "render-this";
import Todo from './Components/Todo';
import Auth from './Components/Auth';

ReactDOM.render(
    <GlobalState components={[Auth, Todo]}>
        <App />
    </GlobalState>, 
    document.getElementById('root')
);
