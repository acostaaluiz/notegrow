import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import { NavigationPageProp } from '../interfaces/navigation';
import { logoffUser } from '../store/actions/UserActions';

interface HomeScreenProps {
  navigation: NavigationPageProp;
}

function HomeScreen({ navigation }: HomeScreenProps) {
  const user = useSelector(({ user }: AppState) => user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigation.navigate('Login');
    }
  }, [user]);

  if (!user) return null;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>
        {(navigation.state as any).routeName}
      </Text>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{user.name}</Text>
      <Button title="Logoff" onPress={() => logoffUser(dispatch)} />
    </View>
  );
}

export default HomeScreen;
