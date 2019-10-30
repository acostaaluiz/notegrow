import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import UserReducer from './UserReducer';
import FAQReducer from './FAQReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  faq: FAQReducer,
  network
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
