import React, { useEffect } from 'react';
import { Keyboard, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationPageProp } from '../interfaces/navigation';
import { AppState } from '../store/reducers';
import { loadUser } from '../store/actions/UserActions';
import { LoginTemplate } from '../components/templates';

interface LoginScreen {
  navigation: NavigationPageProp;
}

function LoginScreen({ navigation }: LoginScreen) {
  const { pending, data } = useSelector(({ user }: AppState) => user);
  const dispatch = useDispatch();
  const requestUser = loadUser(dispatch);

  const onSubmit = (username: string, password: string) => {
    requestUser(username, password);
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
