import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import { NavigationPageProp } from '../interfaces/navigation';
import { logoffUser } from '../store/actions/UserActions';
import { HomeTemplate } from '../components/templates';

interface HomeScreenProps {
  navigation: NavigationPageProp;
}

function HomeScreen({ navigation }: HomeScreenProps) {
  const user = useSelector(({ user }: AppState) => user.data);
  const dispatch = useDispatch();
  const onLogoff = () => logoffUser(dispatch);

  useEffect(() => {
    if (!user) {
      navigation.navigate('Login');
    }
  }, [user]);

  if (!user) return null;

  return (
    <HomeTemplate
      pageName={(navigation.state as any).routeName}
      user={user}
      onLogoff={onLogoff}
    />
  );
}

export default HomeScreen;
