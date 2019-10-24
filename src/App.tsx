import React from 'react';
import { Provider } from 'react-redux';
import { ReduxNetworkProvider } from 'react-native-offline';
import store from './store';
import Router from './router';

function App() {
  return (
    <Provider store={store}>
      <ReduxNetworkProvider>
        <Router />
      </ReduxNetworkProvider>
    </Provider>
  );
}

export default App;
