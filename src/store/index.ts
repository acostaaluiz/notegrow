import { compose, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createNetworkMiddleware } from 'react-native-offline';
import reducers from './reducers';

const composeEnhancers =
  (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk, networkMiddleware)),
);

export default store;
