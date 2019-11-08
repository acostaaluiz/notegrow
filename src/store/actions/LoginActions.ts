import { Dispatch } from 'redux';
import { ActionPayload } from '../../interfaces/redux';
import {
  LOGIN_FETCH_PENDING,
  LOGIN_FETCH_SUCCESS,
  LOGIN_LOGOFF,
  LOGIN_SAVEPREFERENCES_PENDING,
  LOGIN_SAVEPREFERENCES_SUCCESS,
  LOGIN_SAVEPREFERENCES_ERROR,
  LOGIN_FETCH_ERROR,
} from '../types';
import LoginModel, { LoginInterface } from '../../models/login';
import ErrorModel, { ErrorInterface } from '../../models/error';
import {
  login,
  loginMock,
  loginExists,
  loginMockError,
} from '../../services/login';
import { LoginReducerState } from '../reducers/LoginReducer';
import { userInfo } from 'os';

export type HomeActionTypes = ActionPayload<LoginReducerState>;

function loginFetchPending() {
  return { type: LOGIN_FETCH_PENDING };
}

function loginFetchSuccess(login: Partial<LoginInterface>) {
  return {
    type: LOGIN_FETCH_SUCCESS,
    payload: login,
  };
}

function loginFetchError(error: Partial<ErrorInterface>) {
  return {
    type: LOGIN_FETCH_ERROR,
    error: error,
  };
}

function logoff() {
  return {
    type: LOGIN_LOGOFF,
  };
}

export function savePreferences(dispatch: Dispatch) {
  return async (state: string, city: string, center: string) => {
    dispatch({ type: LOGIN_SAVEPREFERENCES_PENDING });
    dispatch({
      type: LOGIN_SAVEPREFERENCES_SUCCESS,
      payload: { state, city, center },
    });
  };
}

export function doLoginService(dispatch: Dispatch) {
  return async (userName: string, password: string) => {
    dispatch(loginFetchPending());

    const data = await loginMockError(userName, password);

    if (data.error == 'invalid_grant') {
      const errorModel = ErrorModel(data);
      console.log('errorModel: ' + JSON.stringify(errorModel));
      if (errorModel) dispatch(loginFetchError(errorModel));
    } else {
      const loginModel = LoginModel(data);

      if (loginModel) {
        dispatch(loginFetchSuccess(loginModel));
      } else {
        // ...
      }
    }
  };
}

export function doLogoff(dispatch: Dispatch) {
  dispatch(logoff());
}

function getLoginObj(
  userName: string,
  access: boolean,
): Partial<LoginInterface> {
  return {
    userName: userName,
    checkedUser: access,
  };
}
