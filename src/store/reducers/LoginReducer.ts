
import { ActionPayload } from '../../interfaces/redux';
import { LOGIN_FETCH_PENDING, LOGIN_FETCH_SUCCESS, LOGIN_LOGOFF, LOGIN_SAVEPREFERENCES_PENDING, LOGIN_SAVEPREFERENCES_SUCCESS } from '../types';
import { LoginInterface } from '../../models/login';

export interface LoginReducerState {
    pending: boolean;
    data?: LoginInterface;
    error?: string;
}

const INITIAL_STATE: LoginReducerState = {
    pending: false,
    data: undefined,
    error: undefined
}

function LoginReducer(state = INITIAL_STATE, action: ActionPayload<LoginInterface | any>) {
    // Estou carregando as informações do usuário
    // Salvar os dados do usuário
    // Deu algum erro

    switch (action.type) {
        case LOGIN_FETCH_PENDING:
            return {
                ...state,
                pending: true
            };
        case LOGIN_FETCH_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload
            }
        case LOGIN_SAVEPREFERENCES_PENDING:
            return {
                ...state,
                pending: true,
            }
        case LOGIN_SAVEPREFERENCES_SUCCESS:
            return {
                ...state,
                pending: false,
                data: {
                    ...state.data,
                    state: action.payload!.state,
                    city: action.payload!.city,
                    center: action.payload!.center,
                }
            }
        case LOGIN_LOGOFF:
            return { ...INITIAL_STATE }
        default:
            return state
    }
}

export default LoginReducer;
