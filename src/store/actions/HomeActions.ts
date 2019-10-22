import { Dispatch } from 'redux';
import {
  HOME_FETCH_PENDING,
  HOME_FETCH_SUCCESS,
  HOME_FETCH_ERROR,
} from '../types';
import { ActionPayload } from '../../interfaces/redux';

export type HomeActionTypes = ActionPayload<number[]>;

function homeFetchPending(): HomeActionTypes {
  return {
    type: HOME_FETCH_PENDING,
  };
}

function homeFetchSuccess(data: number[]): HomeActionTypes {
  return {
    type: HOME_FETCH_SUCCESS,
    payload: data,
  };
}

function homeFetchError(error: string): HomeActionTypes {
  return {
    type: HOME_FETCH_ERROR,
    error,
  };
}

const homeFetch = () => (dispatch: Dispatch) => {
  dispatch(homeFetchPending());

  setTimeout(() => homeFetchSuccess([1, 2, 3]), 2000);

  /*
    API.get(`/home/${userId}`)
    .then(
      (data) => {
        dispatch(homeFetchSuccess(data));
        return data;
      },
      err => dispatch(homeFetchError(err))
    )
    .catch(
      (error) => {
        dispatch(homeFetchError(error));
      }
    );
  */
};

export default homeFetch;
