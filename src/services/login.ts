import Config from 'react-native-config';
import API from "../utils/api";

const { SECRET_KEY } = Config;

export function loginExists(user: string) {

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    return API.get('motoristas/cpf/' + user, 'existe');
}

export function login(user: string, password: string) {

    //RequestBody end-point auth/token/
    const grant_type = JSON.stringify('grant_type=password&username=' + user + '&password=' + password);

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    return API.post('login', { user, password }, headers);
}
