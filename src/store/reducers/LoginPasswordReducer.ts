
import { ActionPayload } from '../../interfaces/redux';
import { LOGINPASSWORD_FETCH_PENDING, LOGINPASSWORD_FETCH_SUCCESS, LOGINPASSWORD_LOGOFF, LOGINPASSWORD_SAVEPREFERENCES_PENDING, LOGINPASSWORD_SAVEPREFERENCES_SUCCESS } from '../types';
import { LoginInterface } from '../../models/login';

export interface LoginPasswordReducerState {
    pending: boolean;
    data?: LoginInterface;
    error?: string;
}

const INITIAL_STATE: LoginPasswordReducerState = {
    pending: false,
    data: undefined,
    error: undefined
}

function LoginPasswordReducer(state = INITIAL_STATE, action: ActionPayload<LoginInterface | any>) {
    // Estou carregando as informações do usuário
    // Salvar os dados do usuário
    // Deu algum erro

    switch (action.type) {
        case LOGINPASSWORD_FETCH_PENDING:
            return {
                ...state,
                pending: true
            };
        case LOGINPASSWORD_FETCH_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload
            }
        case LOGINPASSWORD_SAVEPREFERENCES_PENDING:
            return {
                ...state,
                pending: true,
            }
        case LOGINPASSWORD_SAVEPREFERENCES_SUCCESS:
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
        case LOGINPASSWORD_LOGOFF:
            return { ...INITIAL_STATE }
        default:
            return state
    }
}

export default LoginPasswordReducer;
