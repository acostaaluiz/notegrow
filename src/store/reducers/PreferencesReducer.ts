import { PreferencesInterface } from '../../models/preferences';
import { ActionPayload } from '../../interfaces/redux';
import { PREFERENCES_FETCH_PENDING, PREFERENCES_FETCH_SUCCESS } from '../types';

export interface PreferencesReducerInterface {
  pending: boolean;
  data?: PreferencesInterface;
  error?: string;
}

const INITAL_STATE: PreferencesReducerInterface = {
  pending: false,
  data: {
    places: []
  },
  error: undefined
}

export default function PreferencesReducer(state = INITAL_STATE, action: ActionPayload<PreferencesReducerInterface | any>) {
  switch (action.type) {
    case PREFERENCES_FETCH_PENDING:
      return {
        ...state,
        pending: true
      };
    case PREFERENCES_FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        data: {
          ...state.data,
          places: action.payload.data.places
        }
      }
    default:
      return state;
  }
}
