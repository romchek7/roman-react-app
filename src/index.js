import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './redux/state';
import store from './redux/redux-store';
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let render = (state) => {
    root.render(
        <StoreContext.Provider value={store}>
            <App store={store}/>
        </StoreContext.Provider>
    );
}

reportWebVitals();

render(store.getState())

// store.subscribe(render)

store.subscribe(() => {
    let state = store.getState()
    render(state)
})