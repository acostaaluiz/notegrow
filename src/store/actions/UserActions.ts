import { Dispatch } from 'redux';
import { ActionPayload } from '../../interfaces/redux';
import { USER_FETCH_PENDING, USER_FETCH_SUCCESS, USER_LOGOFF, USER_SAVEPREFERENCES_PENDING, USER_SAVEPREFERENCES_SUCCESS, USER_SAVEPREFERENCES_ERROR } from '../types';
import { getUserByDocument } from '../../services/user';
import UserModel, { UserInterface } from '../../models/users';
import { UserReducerState } from '../reducers/UserReducer';

export type HomeActionTypes = ActionPayload<UserReducerState>;

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
    return async (document: string) => {
        dispatch(userFetchPending())

        const data = await getUserByDocument(document);
        const user = UserModel(data);

        if (user) {
            dispatch(userFetchSuccess(user))
        }
        else {
        }
    }
}

export function logoffUser(dispatch: Dispatch) {
    dispatch(userLogoff())
}

