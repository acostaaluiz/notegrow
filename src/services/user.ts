import Config from 'react-native-config';
import API from "../utils/api";

const { SECRET_KEY } = Config;

export function getUserByDocument(document: string) {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  return API.get('getUser');
}
