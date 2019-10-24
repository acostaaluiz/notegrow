import API from "../utils/api";
import Config from 'react-native-config';

const { SECRET_KEY } = Config;

export function login(user: string, password: string) {
  return API.post('login', { user, password }, {
    Authorization: (SECRET_KEY as string),
  })
}
