import React from 'react';
import { Provider } from 'react-redux';
import { ReduxNetworkProvider } from 'react-native-offline';
import { ThemeProvider } from 'styled-components';
import { store, persisted } from './store';
import Router from './router';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary } from './components/utils';
import themes from './styles';
import StorybookUIRoot from '../storybook';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={themes}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persisted}>
            <ReduxNetworkProvider>
              {/* <Router /> */}
              <StorybookUIRoot />
            </ReduxNetworkProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
