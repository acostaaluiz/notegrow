import Config from 'react-native-config';
import API from '../utils/api';

const { SECRET_KEY } = Config;

export function loginExists(username: string) {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  // TODO: REMOVE
  // debug
  if (username === '00000000000') {
    return API.get(`motoristas/cpf/08015505992/existe`);
  }
  return API.get(`motoristas/cpf/${username}/existe`);
}

export function login(user: string, password: string) {
  //RequestBody end-point auth/token/
  const grant_type = 'grant_type=password&username=09503054990&password=abc123';

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  });

  return API.post('auth/token', { grant_type }, headers);
}

export function loginMock(user: string, password: string) {
  //RequestBody end-point auth/token/

  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  return API.getMock('login');
}

export function loginMockError(user: string, password: string) {
  //RequestBody end-point auth/token/

  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  return API.getMock('loginFailed');
}
