import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import { addComment, changeComment } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let render = (state) => {
    root.render(
        <App state={state} addComment={addComment} changeComment={changeComment} />
    );
}

reportWebVitals();

render(state)

subscribe(render)