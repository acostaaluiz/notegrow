import { UserInterface } from '../../models/users';
import { ActionPayload } from '../../interfaces/redux';
import { USER_FETCH_PENDING, USER_FETCH_SUCCESS } from '../types';

interface UserReducerState {
  pending: boolean;
  data?: UserInterface;
  error?: string;
}

const INITIAL_STATE: UserReducerState = {
  pending: false,
  data: undefined,
  error: undefined
}

function UserReducer(state = INITIAL_STATE, action: ActionPayload<UserInterface>) {
  // Estou carregando as informações do usuário
  // Salvar os dados do usuário
  // Deu algum erro
  switch (action.type) {
    case USER_FETCH_PENDING:
      return {
        ...state,
        pending: true
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      }
    default:
      return state
  }
}

export default UserReducer;
