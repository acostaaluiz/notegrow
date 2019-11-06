import React from 'react';
import { Text, View } from 'react-native';
import { NavigationPageProp } from '../interfaces/navigation';
import { StatusBarComponent } from '../components/atoms';
import SignUpFormTemplate from '../components/templates/SignUpFormTemplate';

interface SignUpFormScreenScreenProps {
  navigation: NavigationPageProp;
}

function SignUpFormScreen({ navigation }: SignUpFormScreenScreenProps) {
  return (
    <>
      <StatusBarComponent />
      <SignUpFormTemplate />
    </>
  );
}

export default SignUpFormScreen;
