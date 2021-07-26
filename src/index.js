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
  apiKey: "AIzaSyDu7aE3bFs7gQbg6NozhYjDXCKslOJh3ao",
  authDomain: "furniture-app-caffc.firebaseapp.com",
  projectId: "furniture-app-caffc",
  storageBucket: "furniture-app-caffc.appspot.com",
  messagingSenderId: "612108609367",
  appId: "1:612108609367:web:ea15a0fbddf3116d014012",
  measurementId: "G-3R92MWWJ0N"
};
// Initialize Firebase
if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);
