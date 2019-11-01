import React, { MutableRefObject, useState } from 'react';
import { TextInputProperties, TextStyle, View, Text } from 'react-native';
import { StyledInput, StyledText } from './Input.styles';
interface InputProps extends TextInputProperties {
  value: string;
  onChangeText: (text: string) => void;
  style?: TextStyle;
  innerref?: MutableRefObject<any>;
  error?: boolean;
  assistiveText?: string;
}
function Input({ value, onChangeText, style, innerref, error, assistiveText, ...props }: InputProps) {
  const overloadStyle = style || {};
  const [focus, setFocus] = useState(false);
  return (
    <View>
      <StyledInput
        ref={innerref}
        {...props}
        style={overloadStyle}
        onChangeText={text => onChangeText(text)}
        onFocus={() => { setFocus(true) }}
        onBlur={() => { setFocus(false) }}
        value={value}
        focus={focus}
        error={error}
      />
      <StyledText
        ref={innerref}
        style={overloadStyle}
        error={error}>
        {assistiveText}
      </StyledText>
    </View>
  );
}
Input.defaultProps = {
  value: ' ',
  onChangeText(text: string) { },
} as Partial<InputProps>;
export default Input;