import React from 'react';
import { Provider } from 'react-redux';

// Containers
import BitcoinContainer from './containers/BitcoinContainer';

// import logo from './logo.svg';
import './App.css';

// Store
import store from './store';

const App = () => (
  <Provider store={store}>
    <BitcoinContainer />
  </Provider>
);

export default App;
