import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messagesArray = [
  { message: 'comment 1', likes: 10 },
  { message: 'comment 2', likes: 20 },
  { message: 'comment 1', likes: 10 },
  { message: 'comment 2', likes: 20 },
  { message: 'comment 1', likes: 10 },
  { message: 'comment 2', likes: 20 },
  { message: 'comment 3', likes: 30 }
];

let dialogsArray = [
  { id: '1', name: 'Dialog 1' },
  { id: '2', name: 'Dialog 2' },
  { id: '3', name: 'Dialog 3' },
  { id: '4', name: 'Dialog 4' },
  { id: '5', name: 'Dialog 5' },
  { id: '6', name: 'Dialog 6' },
  { id: '7', name: 'Dialog 7' },
  { id: '8', name: 'Dialog 8' },
  { id: '9', name: 'Dialog 9' },
  { id: '10', name: 'Dialog 10' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      messagesArray={messagesArray}
      dialogsArray={dialogsArray}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
