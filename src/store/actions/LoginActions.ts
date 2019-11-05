import { Dispatch } from 'redux';
import { ActionPayload } from '../../interfaces/redux';
import { LOGIN_FETCH_PENDING, LOGIN_FETCH_SUCCESS, LOGIN_LOGOFF, LOGIN_SAVEPREFERENCES_PENDING, LOGIN_SAVEPREFERENCES_SUCCESS, LOGIN_SAVEPREFERENCES_ERROR } from '../types';
import { login } from '../../services/login';
import LoginModel, { LoginInterface } from '../../models/login';
import { LoginReducerState } from '../reducers/LoginReducer';

export type HomeActionTypes = ActionPayload<LoginReducerState>;

function loginFetchPending() {
  return { type: LOGIN_FETCH_PENDING }
}

function loginFetchSuccess(login: LoginInterface) {
  return {
    type: LOGIN_FETCH_SUCCESS,
    payload: login
  }
}

function logoff() {
  return {
    type: LOGIN_LOGOFF
  }
}

export function savePreferences(dispatch: Dispatch) {
  return async (state: string, city: string, center: string) => {
    dispatch({ type: LOGIN_SAVEPREFERENCES_PENDING });
    dispatch({ type: LOGIN_SAVEPREFERENCES_SUCCESS, payload: { state, city, center } });
  }
}

export function doLogin(dispatch: Dispatch) {
  return async (username: string, password: string) => {
    dispatch(loginFetchPending())

    const data = await login(username, password);
    const loginModel = LoginModel(data);

    if (loginModel) {
      dispatch(loginFetchSuccess(loginModel))
    }
    else {
      // ...
    }
  }
}

export function doLogoff(dispatch: Dispatch) {
  dispatch(logoff())
}

