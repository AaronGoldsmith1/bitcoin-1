import React from 'react';
import { Provider } from 'react-redux';

// Containers
import BitcoinContainer from './containers/BitcoinContainer';

// Store
import store from './store';

const App = () => (
  <Provider store={store}>
    <BitcoinContainer />
  </Provider>
);

export default App;
