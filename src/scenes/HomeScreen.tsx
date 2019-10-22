import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState } from '../store/reducers';

function HomeScreen() {
  const result = useSelector(({ home }: AppState) => home);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeStore: {JSON.stringify(result)}</Text>
    </View>
  );
}

export default HomeScreen;
