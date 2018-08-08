import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return(
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}


export default App;
