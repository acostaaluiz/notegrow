import React from 'react';
import { Text, View, Button } from 'react-native';
import { UserInterface } from '../../../models/users';

interface HomeTemplateProps {
  pageName: string;
  user: UserInterface;
  onLogoff: () => void;
}

function HomeTemplate({ pageName, user, onLogoff }: HomeTemplateProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{pageName}</Text>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{user.name}</Text>
      <Button title="Logoff" onPress={onLogoff} />
    </View>
  );
}

HomeTemplate.defaultProps = {
  pageName: 'Home',
  user: { name: 'Valente' },
  onLogoff() {},
} as Partial<HomeTemplateProps>;

export default HomeTemplate;
