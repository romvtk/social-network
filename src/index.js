import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';


let state = {
    posts : [
        { id: 1, message: 'Как твои дела?', likesCount: 12 },
        { id: 2, message: 'Всё здорово', likesCount: 34 }],
    dialogs : [
        { id: 1, name: 'Иван' },
        { id: 2, name: 'Мария' },
        { id: 3, name: 'Виктория' }],
    messages : [
        { id: 1, message: 'Первое сообщение' },
        { id: 2, message: 'Второе сообщение' },
        { id: 3, message: 'Третие сообщение' },
        { id: 4, message: 'Четвёртое сообщение' },
        { id: 5, message: 'Пятое сообщение' }]
    
}

ReactDOM.render(<App state={state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
