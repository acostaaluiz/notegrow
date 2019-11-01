import React from 'react';
import { Text, View } from 'react-native';
import { UserInterface } from '../../../models/users';
import { Button } from '../../atoms';
import { ThemeProvider } from 'styled-components';

interface HomeTemplateProps {
  pageName: string;
  user: UserInterface;
  onLogoff: () => void;
}

function HomeTemplate({ pageName, user, onLogoff }: HomeTemplateProps) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={{ fontSize: 24 }}>{pageName}</Text>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{user.name}</Text>
      {/* <Button title="Logoff" onPress={onLogoff} /> */}
      <ThemeProvider theme={{ dark: true }}>
        <>
          <Button
            title="Ok, entendi"
            secondary
            onPress={() => console.log('wa')}
          />
          <Button
            title="Ok, entendi"
            secondary
            disabled
            onPress={() => console.log('wa')}
          />
        </>
      </ThemeProvider>
    </View>
  );
}

HomeTemplate.defaultProps = {
  pageName: 'Home',
  user: { name: 'Valente' },
  onLogoff() {},
} as Partial<HomeTemplateProps>;

export default HomeTemplate;
