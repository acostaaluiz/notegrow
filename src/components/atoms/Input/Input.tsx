import React, { MutableRefObject } from 'react';
import { TextInputProperties, TextStyle } from 'react-native';
import { StyledInput } from './Input.styles';

interface InputProps extends TextInputProperties {
  value: string;
  onChangeText: (text: string) => void;
  style?: TextStyle;
  innerref?: MutableRefObject<any>;
}

function Input({ value, onChangeText, style, innerref, ...props }: InputProps) {
  const overloadStyle = style || {};
  return (
    <StyledInput
      ref={innerref}
      {...props}
      style={overloadStyle}
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
