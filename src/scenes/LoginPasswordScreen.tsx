import React, { useEffect } from 'react';
import { Keyboard, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationPageProp } from '../interfaces/navigation';
import { AppState } from '../store/reducers';
import { doLoginService } from '../store/actions/LoginActions';
import { LoginPasswordTemplate } from '../components/templates';

interface LoginScreen {
    navigation: NavigationPageProp;
}

function LoginPasswordScreen({ navigation }: LoginScreen) {
    const { pending, data } = useSelector(({ login }: AppState) => login);
    const dispatch = useDispatch();
    const requestLogin = doLoginService(dispatch);

    const onSubmit = (password: string) => {
        const document = navigation.getParam('document');
        requestLogin(document, password);

        Keyboard.dismiss();

        console.log('document: ' + document);
    };

    useEffect(() => {
        if (data) {
            console.log('data: ' + JSON.stringify(data));
            navigation.navigate('Home');
        }
    }, [data]);

    return <LoginPasswordTemplate pending={pending} onSubmit={onSubmit} />;
}

export default LoginPasswordScreen;
