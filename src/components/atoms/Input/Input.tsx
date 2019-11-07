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
  containerStyle?: ViewStyle;
  assistiveTextStyle?: TextStyle;
  innerref?: MutableRefObject<any> | innerrefType | void;
  error?: boolean | string;
  assistiveText?: string;
  showSoftInputOnFocus?: boolean;
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
  onFocus,
  onBlur,
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
          ref={innerref as any}
          {...props}
          style={overloadStyle}
          onChangeText={text => onChangeText && onChangeText(text)}
          onFocus={e => {
            setFocus(true);
            if (onFocus) {
              onFocus(e);
            }
          }}
          onBlur={e => {
            setFocus(false);
            if (onBlur) {
              onBlur(e);
            }
          }}
          value={value}
          editable={editable}
          placeholderTextColor={colors.black.inactive}
          secureTextEntry={hidingPassword}
        />

        {assistiveText || error ? (
          <StyledText style={assistiveTextStyle}>
            {typeof error === 'string' ? error : assistiveText}
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
