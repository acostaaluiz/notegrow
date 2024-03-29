import React from 'react';
import { Text, View } from 'react-native';
import { LoginInterface } from '../../../models/login';
import { Button } from '../../atoms';

interface HomeTemplateProps {
  pageName: string;
  login: LoginInterface;
  onLogoff: () => void;
}

function HomeTemplate({ pageName, login, onLogoff }: HomeTemplateProps) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 24 }}>{pageName}</Text>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{login.userName}</Text>
      <Button secondary inline title="Logoff" onPress={onLogoff} />
    </View>
  );
}

HomeTemplate.defaultProps = {
  pageName: 'Home',
  login: { userName: 'Valente' },
  onLogoff() { },
} as Partial<HomeTemplateProps>;

export default HomeTemplate;
