import React, {Component} from 'react';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './reducers';
import RouterComponent from './Router';
import moment from 'moment';
// import Home from './page/Home';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCzgCw6LALYFF_XWFxWHII_WZmC7XJBDXk",
      authDomain: "authentication-8942a.firebaseapp.com",
      databaseURL: "https://authentication-8942a.firebaseio.com",
      storageBucket: "authentication-8942a.appspot.com",
      messagingSenderId: "772421632096"
    });
  }

  render (){
    // var date = new Date();
    // console.log(moment(date).format('DD/MM/YYYY'));

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk), autoRehydrate());
    persistStore(store, {storage: AsyncStorage})
    console.log(store)
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
      );
  }
}

export default App;
