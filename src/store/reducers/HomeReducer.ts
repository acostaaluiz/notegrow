import { ActionPayload } from '../../interfaces/redux';
import {
  HOME_FETCH_PENDING,
  HOME_FETCH_SUCCESS,
  HOME_FETCH_ERROR,
} from '../types';
import { HomeActionTypes } from '../actions/HomeActions';

interface HomeState {
  pending: boolean;
  data: number[];
  error?: string;
}

const INITIAL_STATE: HomeState = {
  pending: false,
  data: [],
  error: undefined,
};

export default function HomeReducer(
  state = INITIAL_STATE,
  action: HomeActionTypes,
): HomeState {
  switch (action.type) {
    case HOME_FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case HOME_FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload ? [...action.payload] : [],
      };
    case HOME_FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
