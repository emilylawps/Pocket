import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';
import moment from 'moment';
// import Home from './page/Home';

class App extends Component {

  render (){
    // var date = new Date();
    // console.log(moment(date).format('DD/MM/YYYY'));

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
      );
  }
}

export default App;
