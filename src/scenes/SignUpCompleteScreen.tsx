import React from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import { NavigationPageProp } from '../interfaces/navigation';
import { AuthGuard } from '../components/utils';
import { BlueScreenTemplate } from '../components/templates';

interface SignUpCompleteScreenProps {
  navigation: NavigationPageProp;
}

function SignUpCompleteScreen({ navigation }: SignUpCompleteScreenProps) {
  return (
    <BlueScreenTemplate
      title={`Tudo certo!\nSeu acesso foi criado!`}
      buttonText="Ok"
      onPress={() => navigation.navigate('Login')}
    />
  );
}

export default SignUpCompleteScreen;
