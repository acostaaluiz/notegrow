import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import LoginReducer from './LoginReducer';
import UserReducer from './UserReducer';
import PreferencesReducer from './PreferencesReducer';
import FAQReducer from './FAQReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  preferences: PreferencesReducer,
  faq: FAQReducer,
  network
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
