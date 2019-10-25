import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  network
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
