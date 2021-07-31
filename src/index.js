import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
// import App from './App';
import Routes from "./components/Routes";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Store from './store/Store';
import firebase from 'firebase'

ReactDOM.render(
  <PersistGate loading={false} persistor={Store.persistor}>

    <Provider store={Store.store}>

      <Router>
        <Routes />
      </Router>
    </Provider>
  </PersistGate>
  , document.getElementById('root'));
registerServiceWorker();



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDHpdnjtZPe4Wd-bn-PEq0S0QeqF8gVzO0",
  authDomain: "windaily-cf016.firebaseapp.com",
  projectId: "windaily-cf016",
  storageBucket: "windaily-cf016.appspot.com",
  messagingSenderId: "478338770949",
  appId: "1:478338770949:web:94210923f2f3b22c07946c",
  measurementId: "G-6320PG51P9"
};

// Initialize Firebase
if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);
