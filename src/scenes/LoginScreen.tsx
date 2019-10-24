import React from 'react';
import { Keyboard, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import { loadUser } from '../store/actions/UserActions';
import { LoginTemplate } from '../components/templates';

function LoginScreen() {
  const { pending, data } = useSelector(({ user }: AppState) => user);
  const dispatch = useDispatch();
  const requestUser = loadUser(dispatch);

  const onSubmit = (username: string, password: string) => {
    requestUser(username, password);
    Keyboard.dismiss();
  };

  return <LoginTemplate pending={pending} onSubmit={onSubmit} />;
}

export default LoginScreen;
