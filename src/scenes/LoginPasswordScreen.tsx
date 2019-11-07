import React, { useEffect } from 'react';
import { Keyboard, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationPageProp } from '../interfaces/navigation';
import { AppState } from '../store/reducers';
import { doLoginService } from '../store/actions/LoginPasswordActions';
import { LoginPasswordTemplate } from '../components/templates';

interface LoginScreen {
    navigation: NavigationPageProp;
}

function LoginPasswordScreen({ navigation }: LoginScreen) {
    const login = useSelector(({ login }: AppState) => login.data);
    const { pending, data } = useSelector(({ loginPassword }: AppState) => loginPassword);
    const dispatch = useDispatch();
    const requestLogin = doLoginService(dispatch);

    const onSubmit = (password: string) => {
        requestLogin(login.userName, password);

        if (data) {
            navigation.navigate('Home');
        }

        Keyboard.dismiss();
    };

    return <LoginPasswordTemplate pending={pending} onSubmit={onSubmit} />;
}

export default LoginPasswordScreen;
