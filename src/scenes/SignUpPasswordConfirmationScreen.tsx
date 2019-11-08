import React, { useState } from 'react';
import { NavigationPageProp } from '../interfaces/navigation';
import { StatusBarComponent } from '../components/atoms';
import { SignUpPasswordConfirmationTemplate } from '../components/templates';

interface SignUpPasswordConfirmationScreenProps {
  navigation: NavigationPageProp;
}

function SignUpPasswordConfirmationScreen({
  navigation,
}: SignUpPasswordConfirmationScreenProps) {
  const [loading, setLoading] = useState(false);
  const { params } = navigation.state;

  if (!params || (params && !params.password)) {
    navigation.navigate('SignUpPassword');
    return null;
  }

  const onSubmit = ({ password }: { password: string }) => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('SignUpComplete');
    }, 1000);
  };

  return (
    <>
      <StatusBarComponent />
      <SignUpPasswordConfirmationTemplate
        entryPassword={params.password}
        loading={loading}
        onPressBack={() => navigation.navigate('SignUpPassword')}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default SignUpPasswordConfirmationScreen;
