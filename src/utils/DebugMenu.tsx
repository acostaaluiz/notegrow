import React, { PropsWithChildren, useState } from 'react';
import { Alert, View } from 'react-native';
import StorybookUIRoot from '../../storybook';
import { PinchGestureHandler } from 'react-native-gesture-handler';

export default function DebugMenu({ children }: PropsWithChildren<{}>) {
  const [opened, setOpened] = useState(false);
  const [debugging, setDebugging] = useState(false);
  const onOpen = () => {
    if (!opened) {
      setOpened(true);
      Alert.alert(
        'Menu Debug',
        'Selecione uma das opções',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
            onPress: () => setOpened(false),
          },
          {
            text: `${debugging ? 'Fechar' : 'Abrir'} o Storybook`,
            onPress: () => {
              setDebugging(!debugging);
              setOpened(false);
            },
          },
        ],
        { cancelable: false, onDismiss: () => setOpened(false) },
      );
    }
  };
  return (
    <PinchGestureHandler shouldCancelWhenOutside onGestureEvent={onOpen}>
      <View style={{ flex: 1 }}>
        {!debugging ? children : <StorybookUIRoot />}
      </View>
    </PinchGestureHandler>
  );
}
