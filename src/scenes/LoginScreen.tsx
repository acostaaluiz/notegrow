import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { NavigationPageProp } from '../interfaces/navigation';
import { LoginTemplate } from '../components/templates';
import { loginExists } from '../services/login';

interface LoginScreen {
  navigation: NavigationPageProp;
}

function LoginScreen({ navigation }: LoginScreen) {
  const [loading, setLoading] = useState(false);

  const onSubmit = (cpf: string) => {
    const username = cpf.replace(/\.?\-?/g, '');

    setLoading(true);

    loginExists(username)
      .then((status: string) => {
        setLoading(false);
        if (status == '200' || status) {
          navigation.navigate('LoginPassword', { document: username });
        } else {
          navigation.navigate('SignUp');
        }
      })
      .catch(error => {
        setLoading(false);
        navigation.navigate('SignUp');
      });

    Keyboard.dismiss();
  };

  return <LoginTemplate loading={loading} onSubmit={onSubmit} />;
}

export default LoginScreen;
