import React, { MutableRefObject } from 'react';
import { Text, TextInput, TextInputProperties, TextStyle } from 'react-native';

interface InputProps extends TextInputProperties {
  value: string;
  onChangeText: (text: string) => void;
  style?: TextStyle;
  innerref?: MutableRefObject<any>;
}

function Input({ value, onChangeText, style, innerref, ...props }: InputProps) {
  const overloadStyle = style || {};
  return (
    <TextInput
      ref={innerref}
      {...props}
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        ...overloadStyle,
      }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

Input.defaultProps = {
  value: '',
  onChangeText(text: string) {},
} as Partial<InputProps>;

export default Input;
