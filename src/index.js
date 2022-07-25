import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/redux-store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

let render = (state) => {
    root.render(
        <App store={store} state={state}/>
    );
}

reportWebVitals();

render(store.getState())

store.subscribe(() => {
    let state = store.getState()
    render(state)
})