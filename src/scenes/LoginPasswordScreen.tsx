import React, { useEffect } from 'react';
import { Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationPageProp } from '../interfaces/navigation';
import { AppState } from '../store/reducers';
import { LoginPasswordTemplate } from '../components/templates';
import { doLoginService } from '../store/actions/LoginActions';

interface LoginPasswordScreen {
  navigation: NavigationPageProp;
}

function LoginPasswordScreen({ navigation }: LoginPasswordScreen) {
  const { pending, data, error } = useSelector(({ login }: AppState) => login);
  const dispatch = useDispatch();
  const requestLogin = doLoginService(dispatch);

  const onSubmit = (password: string) => {
    const document = navigation.getParam('document');
    requestLogin(document, password);
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (data && data.access_token && data.access_token.length) {
      navigation.navigate('Home');
    }
  }, [data]);

  return (
    <LoginPasswordTemplate
      error={error && error.error_description}
      pending={pending}
      onSubmit={onSubmit}
    />
  );
}

export default LoginPasswordScreen;
