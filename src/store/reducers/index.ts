import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';

const rootReducer = combineReducers({
  home: HomeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
