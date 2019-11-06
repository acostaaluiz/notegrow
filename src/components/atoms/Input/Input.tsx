import React, { MutableRefObject, useState } from 'react';
import { TextInputProperties, TextStyle, ViewStyle } from 'react-native';
import { StyledInput, StyledText, Label, InputView } from './Input.styles';
import colors from '../../../styles/colors';

type innerrefType = (ref: unknown) => void;

interface InputProps extends TextInputProperties {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: ViewStyle;
  style?: TextStyle;
  innerref?: MutableRefObject<any> | innerrefType;
  error?: boolean;
  assistiveText?: string;
  editable: boolean;
}
function Input({
  label,
  value,
  onChangeText,
  containerStyle,
  style,
  innerref,
  error,
  assistiveText,
  editable,
  ...props
}: InputProps) {
  const overloadStyle = style || {};
  const [focus, setFocus] = useState(false);
  return (
    <InputView style={containerStyle}>
      {label ? (
        <Label error={error} focus={focus} editable={editable}>
          {label}
        </Label>
      ) : null}
      <StyledInput
        ref={innerref}
        {...props}
        style={overloadStyle}
        onChangeText={text => onChangeText && onChangeText(text)}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        value={value}
        focus={focus}
        error={error}
        editable={editable}
        hasLabel={label && label.length > 0}
        placeholderTextColor={colors.black.inactive}
      />
      {assistiveText ? (
        <StyledText ref={innerref} style={overloadStyle} error={error}>
          {assistiveText}
        </StyledText>
      ) : null}
    </InputView>
  );
}
Input.defaultProps = {
  editable: true,
} as Partial<InputProps>;
export default Input;
