import { Dispatch } from 'redux';
import { ActionPayload } from '../../interfaces/redux';
import { USER_FETCH_PENDING, USER_FETCH_SUCCESS } from '../types';
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

export async function loadUser(dispatch: Dispatch) {
  dispatch(userFetchPending())

  const data = await login('112312', '12321321');
  const user = UserModel(data);

  if (user) {
    dispatch(userFetchSuccess(user))
  }
  else {
    // ...
  }
}

