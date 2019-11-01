import React, { MutableRefObject, useState } from 'react';
import { TextInputProperties, TextStyle, View, Text } from 'react-native';
import { StyledInput, StyledText } from './Input.styles';
import colors from '../../../styles/colors';

interface InputProps extends TextInputProperties {
  value: string;
  onChangeText: (text: string) => void;
  style?: TextStyle;
  innerref?: MutableRefObject<any>;
  error?: boolean;
  assistiveText?: string;
  editable: boolean;
}
function Input({ value, onChangeText, style, innerref, error, assistiveText, editable, ...props }: InputProps) {
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
        editable={editable}
        placeholderTextColor={editable ? colors.inputFocus.active : colors.fontColor.inactive}
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