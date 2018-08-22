import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount(){
     // Initialize Firebase
     const config = {
       apiKey: 'AIzaSyDKkeYPpM9VtSsghm0xsLWoG3Ux8PXe-XU',
       authDomain: 'manager-baf3f.firebaseapp.com',
       databaseURL: 'https://manager-baf3f.firebaseio.com',
       projectId: 'manager-baf3f',
       storageBucket: 'manager-baf3f.appspot.com',
       messagingSenderId: '952154575054'
     };
     firebase.initializeApp(config);
  }
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


export default App;
