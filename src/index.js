import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import * as serviceWorker from './serviceWorker';

let postData = [
    { id: 1, post: 'Post1', likesCount: 10 },
    { id: 2, post: 'Post2', likesCount: 20 },
    { id: 3, post: 'Post3', likesCount: 30 },
    { id: 4, post: 'Post4', likesCount: 40 },
    { id: 5, post: 'Post5', likesCount: 55 }
]

let dialogsData = [
    { id: 1, name: 'Name 1' },
    { id: 2, name: 'Name 2' },
    { id: 3, name: 'Name 3' },
    { id: 4, name: 'Name 4' },
    { id: 5, name: 'Name 5' },
    { id: 6, name: 'Name 6'}
]

let messageData = [
    { id:1, message: 'message 1'},
    { id:2, message: 'message 2'},
    { id:3, message: 'message 3'},
    { id:4, message: 'message 4'},
    { id:5, message: 'message 5'}
]

ReactDOM.render(<App postData={postData} messageData={messageData} dialogsData={dialogsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
