import React, { useEffect } from 'react';
import { Keyboard, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationPageProp } from '../interfaces/navigation';
import { AppState } from '../store/reducers';
import { doLogin } from '../store/actions/LoginActions';
import { LoginTemplate } from '../components/templates';

interface LoginScreen {
  navigation: NavigationPageProp;
}

function LoginScreen({ navigation }: LoginScreen) {
  const { pending, data } = useSelector(({ login }: AppState) => login);
  const dispatch = useDispatch();
  const requestLogin = doLogin(dispatch);

  const onSubmit = (username: string, password: string) => {
    requestLogin(username, password);
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (data) {
      navigation.navigate('Home');
    }
  }, [data]);

  return <LoginTemplate pending={pending} onSubmit={onSubmit} />;
}

export default LoginScreen;
