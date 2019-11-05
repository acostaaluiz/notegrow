import React, { PropsWithChildren } from 'react';
import { Text, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function CloseKeyboard({ children }: PropsWithChildren<{}>) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
}

export default CloseKeyboard;
