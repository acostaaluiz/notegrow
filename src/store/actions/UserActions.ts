import { Dispatch } from 'redux';
import { ActionPayload } from '../../interfaces/redux';
import { USER_FETCH_PENDING, USER_FETCH_SUCCESS, USER_LOGOFF } from '../types';
import { login } from '../../services/user';
import UserModel, { UserInterface } from '../../models/users';

export type HomeActionTypes = ActionPayload<number[]>;

function userFetchPending() {
  return { type: USER_FETCH_PENDING }
}

function userFetchSuccess(user: UserInterface) {
  return {
    type: USER_FETCH_SUCCESS,
    payload: user
  }
}

function userLogoff() {
  return {
    type: USER_LOGOFF
  }
}

export function loadUser(dispatch: Dispatch) {
  return async (username: string, password: string) => {
    dispatch(userFetchPending())

    const data = await login(username, password);
    const user = UserModel(data);

    if (user) {
      dispatch(userFetchSuccess(user))
    }
    else {
      // ...
    }
  }
}

export function logoffUser(dispatch: Dispatch) {
  dispatch(userLogoff())
}

