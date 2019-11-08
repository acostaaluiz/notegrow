import React, { useEffect } from 'react';
import { Keyboard, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationPageProp } from '../interfaces/navigation';
import { AppState } from '../store/reducers';
import { checkDocument } from '../store/actions/LoginActions';
import { LoginTemplate } from '../components/templates';

interface LoginScreen {
  navigation: NavigationPageProp;
}

function LoginScreen({ navigation }: LoginScreen) {
  const { data } = useSelector(({ login }: AppState) => login);
  const dispatch = useDispatch();
  const checkLogin = checkDocument(dispatch);

  const onSubmit = (username: string) => {
    checkLogin(username);
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (data && data.userName) {
      navigation.navigate('LoginPassword', { document: data.userName });
    }
  }, [data]);

  return <LoginTemplate onSubmit={onSubmit} />;
}

export default LoginScreen;