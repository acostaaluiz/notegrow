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
  return async (userName: string) => {
    dispatch(loginFetchPending())

    const data = getLoginObj(userName);
    const loginModel = LoginModel(data);

    if (loginModel) {
      dispatch(loginFetchSuccess(loginModel))
    }
    else {
      // ...
    }
  }
}

export function doLoginService(dispatch: Dispatch) {
  return async (userName: string, password: string) => {
    dispatch(loginFetchPending())

    const data = await login(userName, password);
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

    console.log(userName);
    const data = await loginExists(userName);

    console.log('alou: ' + JSON.stringify(data));

    /*if (loginModel) {
      dispatch(loginFetchSuccess(loginModel))
    }
    else {
      // ...
    }*/
  }
}

export function doLogoff(dispatch: Dispatch) {
  dispatch(logoff())
}

function getLoginObj(userName: string): Partial<LoginInterface> {
  return {
    userName: userName
  }
}

