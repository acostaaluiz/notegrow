import { combineReducers } from 'redux';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  user: UserReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
