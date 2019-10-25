import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import ReduxThunk from 'redux-thunk';
import { createNetworkMiddleware } from 'react-native-offline';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';

const composeEnhancers =
  (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const persistedReducer = persistReducer({
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user']
}, reducers)

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(ReduxThunk, networkMiddleware)),
);

export const persisted = persistStore(store);

