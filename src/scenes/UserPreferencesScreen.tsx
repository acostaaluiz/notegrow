import React from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import { NavigationPageProp } from '../interfaces/navigation';
import { AuthGuard } from '../components/utils';

interface UserPreferencesScreenProps {
  navigation: NavigationPageProp;
}

function UserPreferences({ navigation }: UserPreferencesScreenProps) {
  const user = useSelector(({ user }: AppState) => user.data);
  const dispatch = useDispatch();

  return (
    <AuthGuard navigation={navigation}>
      <Text>UserPreferences</Text>
    </AuthGuard>
  );
}

export default UserPreferences;
