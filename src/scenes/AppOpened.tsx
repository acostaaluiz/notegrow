import React from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { NavigationPageProp } from '../interfaces/navigation';
import { useSelector } from 'react-redux';
import { AppState } from '../store/reducers';

interface AppOpenedProps {
  navigation: NavigationPageProp;
}

function AppOpened({ navigation }: AppOpenedProps) {
  const user = useSelector(({ user }: AppState) => user.data);
  navigation.navigate(!user ? 'Login' : 'Home');
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

export default AppOpened;
