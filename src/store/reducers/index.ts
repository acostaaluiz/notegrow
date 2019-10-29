import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import UserReducer from './UserReducer';
import PreferencesReducer from './PreferencesReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  preferences: PreferencesReducer,
  network
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
