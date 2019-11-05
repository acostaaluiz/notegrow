import React from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import { NavigationPageProp } from '../interfaces/navigation';
import { AuthGuard } from '../components/utils';
import { BlueScreenTemplate } from '../components/templates';

interface SignUpBlueScreenProps {
  navigation: NavigationPageProp;
}

const pageContent = {
  title: 'Olá! Você já tem cadastro com a gente',
  text:
    'Percebemos que você já é motorista Votorantim Cimentos e, por segurança, precisamos que confirme alguns dados para acessar sua conta.',
  buttonText: 'Confirmar dados',
};

function SignUpBlueScreen({ navigation }: SignUpBlueScreenProps) {
  return <BlueScreenTemplate {...pageContent} />;
}

export default SignUpBlueScreen;
