import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalState from "render-this";
import ToKill from './Components/ToKill';
import Todo from './Components/Todo';

ReactDOM.render(
    <GlobalState components={[Todo, ToKill]}>
        <App />
    </GlobalState>, 
    document.getElementById('root')
);
registerServiceWorker();
