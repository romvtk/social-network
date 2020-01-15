import * as serviceWorker from './serviceWorker';
import state, { subscriber } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {addPost, updateNewPostText} from './redux/state'

 let rerenderEntireTree = (state) => {
    ReactDOM.render( < App 
        state = {state}
        addPost = {addPost}
        updateNewPostText = {updateNewPostText}
        />, 
        document.getElementById('root'));
}

rerenderEntireTree(state);

subscriber(rerenderEntireTree)




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(rerenderEntireTree);


