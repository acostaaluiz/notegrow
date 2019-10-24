import { Dispatch } from 'redux';
import { ActionPayload } from '../../interfaces/redux';
import { USER_FETCH_PENDING } from '../types';

export type HomeActionTypes = ActionPayload<number[]>;

function userFetchPending() {
  return { type: USER_FETCH_PENDING }
}

export function loadUser(dispatch: Dispatch) {
  dispatch(userFetchPending())
}

