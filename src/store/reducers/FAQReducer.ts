import { FAQInterface } from '../../models/FAQ';
import { ActionPayload } from '../../interfaces/redux';
import { FAQ_FETCH_PENDING, FAQ_FETCH_SUCCESS } from '../types';

interface FAQReducerState {
    pending: boolean;
    data?: FAQInterface[];
    error?: string;
}

const INITIAL_STATE: FAQReducerState = {
    pending: false,
    data: undefined,
    error: undefined
}

function FAQReducer(state = INITIAL_STATE, action: ActionPayload<FAQInterface[]>) {
    // Estou carregando as informações do usuário
    // Salvar os dados do usuário
    // Deu algum erro
    switch (action.type) {
        case FAQ_FETCH_PENDING:
            return {
                ...state,
                pending: true
            };
        case FAQ_FETCH_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload
            }
        default:
            return state
    }
}

export default FAQReducer;
