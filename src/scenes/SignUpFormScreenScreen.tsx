import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationPageProp } from '../interfaces/navigation';
import { StatusBarComponent } from '../components/atoms';
import SignUpFormTemplate from '../components/templates/SignUpFormTemplate';

interface SignUpFormScreenScreenProps {
  navigation: NavigationPageProp;
}

function SignUpFormScreen({ navigation }: SignUpFormScreenScreenProps) {
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('SignUpBlue');
    }, 1000);
  };
  return (
    <>
      <StatusBarComponent />
      <SignUpFormTemplate
        loading={loading}
        onSubmit={onSubmit}
        onPressBack={() => navigation.navigate('SignUpBlue')}
      />
    </>
  );
}

export default SignUpFormScreen;
