import { Dispatch } from 'redux';
import { ActionPayload } from '../../interfaces/redux';
import { LOGIN_FETCH_PENDING, LOGIN_FETCH_SUCCESS, LOGIN_LOGOFF, LOGIN_SAVEPREFERENCES_PENDING, LOGIN_SAVEPREFERENCES_SUCCESS, LOGIN_SAVEPREFERENCES_ERROR } from '../types';
import LoginModel, { LoginInterface } from '../../models/login';
import { login, loginExists } from '../../services/login';
import { LoginReducerState } from '../reducers/LoginReducer';
import { userInfo } from 'os';

export type HomeActionTypes = ActionPayload<LoginReducerState>;

function loginFetchPending() {
  return { type: LOGIN_FETCH_PENDING }
}

function loginFetchSuccess(login: Partial<LoginInterface>) {
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

export function doLoginService(dispatch: Dispatch) {
  return async (userName: string, password: string) => {
    dispatch(loginFetchPending())
    console.log('loguei');
    const data = await login(userName, password);
    console.log('login: ' + JSON.stringify(data));
    const loginModel = LoginModel(data);

    if (loginModel) {
      dispatch(loginFetchSuccess(loginModel))
    }
    else {
      // ...
    }
  }
}

export function checkDocument(dispatch: Dispatch) {
  return async (userName: string) => {
    dispatch(loginFetchPending())

    const data = await loginExists(userName);
    let access;

    if (data == '200')
      access = true;
    else
      access = false;

    const loginModel = getLoginObj(userName, access);

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

function getLoginObj(userName: string, access: boolean): Partial<LoginInterface> {
  return {
    userName: userName,
    checkedUser: access
  }
}

