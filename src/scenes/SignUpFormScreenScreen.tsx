import React from 'react';
import { Text, View } from 'react-native';
import { NavigationPageProp } from '../interfaces/navigation';
import { StatusBarComponent } from '../components/atoms';

interface SignUpFormScreenScreenProps {
  navigation: NavigationPageProp;
}

function SignUpFormScreen({ navigation }: SignUpFormScreenScreenProps) {
  return (
    <>
      <StatusBarComponent />
      <View>
        <Text>SignUpFormScreen</Text>
      </View>
    </>
  );
}

export default SignUpFormScreen;
