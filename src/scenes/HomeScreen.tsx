import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/reducers';
import { loadUser } from '../store/actions/UserActions';

function HomeScreen() {
  const { pending, data } = useSelector(({ user }: AppState) => user);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {pending && <Text>Carregando</Text>}
      {data ? (
        <Text>Dados do usuário: {JSON.stringify(data)}</Text>
      ) : (
        <Text>Não existem dados do usuário</Text>
      )}
      <Button
        title="Fetch"
        onPress={() => {
          loadUser(dispatch);
        }}
      />
    </View>
  );
}

export default HomeScreen;
