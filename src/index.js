import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let render = (state) => {
    root.render(
        <App state={state} addComment={store.addComment.bind(store)} changeComment={store.changeComment.bind(store)} />
    );
}

reportWebVitals();

render(store._state)

store.subscribe(render)