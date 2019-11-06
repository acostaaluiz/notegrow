import React, { MutableRefObject, useState } from 'react';
import { TextInputProperties, TextStyle, ViewStyle } from 'react-native';
import {
  StyledInput,
  StyledText,
  Label,
  InputView,
  PasswordViewerButton,
} from './Input.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  secureTextEntry,
  ...props
}: InputProps) {
  const overloadStyle = style || {};
  const [focus, setFocus] = useState(false);
  const [hidingPassword, setHidingPassword] = useState(secureTextEntry);

  return (
    <InputView style={containerStyle}>
      {secureTextEntry ? (
        <PasswordViewerButton
          onPress={() => setHidingPassword(!hidingPassword)}>
          <Icon name="remove-red-eye" size={24} />
        </PasswordViewerButton>
      ) : null}
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
        secureTextEntry={hidingPassword}
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
