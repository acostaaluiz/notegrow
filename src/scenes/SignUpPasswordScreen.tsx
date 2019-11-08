import React from 'react';
import { NavigationPageProp } from '../interfaces/navigation';
import { StatusBarComponent } from '../components/atoms';
import { SignUpPasswordTemplate } from '../components/templates';

interface SignUpPasswordScreenProps {
  navigation: NavigationPageProp;
}

function SignUpPasswordScreen({ navigation }: SignUpPasswordScreenProps) {
  const onSubmit = ({ password }: { password: string }) => {
    navigation.navigate('SignUpPasswordConfirmation', { password });
  };

  return (
    <>
      <StatusBarComponent />
      <SignUpPasswordTemplate onSubmit={onSubmit} />
    </>
  );
}

export default SignUpPasswordScreen;
