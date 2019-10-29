import { Dispatch } from "redux";
import { ActionPayload } from "../../interfaces/redux";
import { PreferencesReducerInterface } from "../reducers/PreferencesReducer";
import { PREFERENCES_FETCH_PENDING, PREFERENCES_FETCH_SUCCESS } from "../types";
import { PreferencesInterface, PreferencesModel } from "../../models/preferences";
import MOCK_PLACES from '../../mocks/places.json';

export type PreferencesActionTypes = ActionPayload<PreferencesReducerInterface>;

function preferencesFetchPending() {
  return { type: PREFERENCES_FETCH_PENDING }
}

function preferencesFetchSuccess(preferences: PreferencesInterface) {
  return {
    type: PREFERENCES_FETCH_SUCCESS,
    payload: { data: preferences }
  }
}

export function loadPreferences(dispatch: Dispatch) {
  return async () => {
    // dispatch(preferencesFetchPending());

    dispatch(preferencesFetchSuccess(PreferencesModel(MOCK_PLACES)))
  }
}
