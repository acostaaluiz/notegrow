import { Dispatch } from 'redux';
import { ActionPayload } from '../../interfaces/redux';
import { LOGINPASSWORD_FETCH_PENDING, LOGINPASSWORD_FETCH_SUCCESS, LOGINPASSWORD_LOGOFF, LOGINPASSWORD_SAVEPREFERENCES_PENDING, LOGINPASSWORD_SAVEPREFERENCES_SUCCESS, LOGINPASSWORD_SAVEPREFERENCES_ERROR } from '../types';
import LoginModel, { LoginInterface } from '../../models/login';
import { login } from '../../services/login';
import { LoginPasswordReducerState } from '../reducers/LoginPasswordReducer';
import { userInfo } from 'os';

export type HomeActionTypes = ActionPayload<LoginPasswordReducerState>;

function loginPasswordFetchPending() {
    return { type: LOGINPASSWORD_FETCH_PENDING }
}

function loginPasswordFetchSuccess(login: LoginInterface) {
    return {
        type: LOGINPASSWORD_FETCH_SUCCESS,
        payload: login
    }
}

function logoff() {
    return {
        type: LOGINPASSWORD_LOGOFF
    }
}

export function savePreferences(dispatch: Dispatch) {
    return async (state: string, city: string, center: string) => {
        dispatch({ type: LOGINPASSWORD_SAVEPREFERENCES_PENDING });
        dispatch({ type: LOGINPASSWORD_SAVEPREFERENCES_SUCCESS, payload: { state, city, center } });
    }
}

export function doLoginService(dispatch: Dispatch) {
    return async (userName: string, password: string) => {
        dispatch(loginPasswordFetchPending())

        const data = await login(userName, password);
        const loginModel = LoginModel(data);

        if (loginModel) {
            dispatch(loginPasswordFetchSuccess(loginModel))
        }
        else {
            // ...
        }
    }
}

export function doLogoff(dispatch: Dispatch) {
    dispatch(logoff())
}

