import React from 'react';
import { Provider } from 'react-redux';
import { ReduxNetworkProvider } from 'react-native-offline';
import { store, persisted } from './store';
import Router from './router';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary } from './components/utils';
import StorybookUIRoot from '../storybook';
import DebugMenu from './utils/DebugMenu';
import { ThemeProvider } from 'styled-components';

function App() {
  let Child: any = Router;

  if (process.env.NODE_ENV === 'development') {
    Child = () => (
      <>
        <DebugMenu>
          <Router />
        </DebugMenu>
      </>
    );
  }

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persisted}>
          <ReduxNetworkProvider>
            <ThemeProvider theme={{}}>
              <Child />
            </ThemeProvider>
          </ReduxNetworkProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
