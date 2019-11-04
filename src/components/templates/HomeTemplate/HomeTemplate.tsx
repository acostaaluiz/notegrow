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
      }}>
      {/* <Button secondary title="Logoff" onPress={onLogoff} /> */}
      <View>
        <ThemeProvider theme={{ dark: false }}>
          <>
            <Button
              secondary
              icon="favorite"
              onPress={() => console.log('wa')}
            />
            <Button
              secondary
              icon="add"
              title="Com ícone"
              onPress={() => console.log('wa')}
            />
            <Button
              secondary
              inline
              icon="add"
              title="Com ícone inline"
              onPress={() => console.log('wa')}
            />
            <Button
              secondary
              title="Sem ícone"
              onPress={() => console.log('wa')}
            />
            <Button
              secondary
              inline
              title="Sem ícone inline"
              onPress={() => console.log('wa')}
            />
          </>
        </ThemeProvider>
      </View>
      <View style={{ backgroundColor: 'black' }}>
        <ThemeProvider theme={{ dark: true }}>
          <>
            <Button
              secondary
              icon="favorite"
              onPress={() => console.log('wa')}
            />
            <Button
              secondary
              icon="add"
              title="Com ícone"
              onPress={() => console.log('wa')}
            />
            <Button
              secondary
              inline
              icon="add"
              title="Com ícone inline"
              onPress={() => console.log('wa')}
            />
            <Button
              secondary
              title="Sem ícone"
              onPress={() => console.log('wa')}
            />
            <Button
              secondary
              inline
              title="Sem ícone inline"
              onPress={() => console.log('wa')}
            />
          </>
        </ThemeProvider>
      </View>
    </View>
  );
}

HomeTemplate.defaultProps = {
  pageName: 'Home',
  user: { name: 'Valente' },
  onLogoff() {},
} as Partial<HomeTemplateProps>;

export default HomeTemplate;
