import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase'
//let database



// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyCfGu22myhTt4-2i0-TuZpoIyuznKuVOFQ",
  authDomain: "contact-tracker-ccf9c.firebaseapp.com",
  databaseURL: "https://contact-tracker-ccf9c.firebaseio.com",
  storageBucket: "contact-tracker-ccf9c.appspot.com",
};
firebase.initializeApp(config);

// Get a reference to the database service
  var database = firebase.database();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
