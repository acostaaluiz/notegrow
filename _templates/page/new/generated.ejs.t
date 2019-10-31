---
to: src/scenes/<%= h.changeCase.pascalCase(name) %>Screen.tsx
---
import React from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import { NavigationPageProp } from '../interfaces/navigation';
import { AuthGuard } from '../components/utils';

interface <%= h.changeCase.pascalCase(name) %>ScreenProps {
  navigation: NavigationPageProp;
}

function <%= h.changeCase.pascalCase(name) %>({ navigation }: <%= h.changeCase.pascalCase(name) %>ScreenProps) {
  const user = useSelector(({ user }: AppState) => user.data);
  const dispatch = useDispatch();

  return (
    <AuthGuard navigation={navigation}>
      <Text><%= h.changeCase.pascalCase(name) %></Text>
    </AuthGuard>
  );
}

export default <%= h.changeCase.pascalCase(name) %>;
