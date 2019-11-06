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
import { ThemeProvider } from 'styled-components';

type innerrefType = (ref: unknown) => void;

interface InputProps extends TextInputProperties {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: ViewStyle;
  style?: TextStyle;
  assistiveTextStyle?: TextStyle;
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
  assistiveTextStyle,
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
    <ThemeProvider
      theme={{ error, focus, editable, hasLabel: label && label.length > 0 }}>
      <InputView style={containerStyle}>
        {secureTextEntry ? (
          <PasswordViewerButton
            onPress={() => setHidingPassword(!hidingPassword)}>
            <Icon name="remove-red-eye" size={24} />
          </PasswordViewerButton>
        ) : null}
        {label ? <Label>{label}</Label> : null}

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
          editable={editable}
          placeholderTextColor={colors.black.inactive}
          secureTextEntry={hidingPassword}
        />
        {assistiveText ? (
          <StyledText ref={innerref} style={assistiveTextStyle}>
            {assistiveText}
          </StyledText>
        ) : null}
      </InputView>
    </ThemeProvider>
  );
}
Input.defaultProps = {
  editable: true,
} as Partial<InputProps>;
export default Input;
