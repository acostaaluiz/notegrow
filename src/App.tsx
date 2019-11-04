import React from 'react';
import { Provider } from 'react-redux';
import { ReduxNetworkProvider } from 'react-native-offline';
import { store, persisted } from './store';
import Router from './router';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary } from './components/utils';
import StorybookUIRoot from '../storybook';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persisted}>
          <ReduxNetworkProvider>
            <Router />
          </ReduxNetworkProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
