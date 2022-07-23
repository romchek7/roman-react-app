import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './redux/state';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

let render = (state) => {
    root.render(
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    );
}

reportWebVitals();

render(store.getState())

// store.subscribe(render)

store.subscribe(() => {
    let state = store.getState()
    render(state)
})