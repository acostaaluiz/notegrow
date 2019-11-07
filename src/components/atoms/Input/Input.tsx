import React, { MutableRefObject, useState } from 'react';
import {
  TextStyle,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {
  StyledInput,
  StyledText,
  Label,
  InputView,
  PasswordViewerButton,
  StyledInputMask,
} from './Input.styles';
import {
  TextInputMaskProps,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../styles/colors';
import { ThemeProvider } from 'styled-components';

type innerrefType = (ref: unknown) => void;

interface InputProps
  extends Pick<TextInputMaskProps, Exclude<keyof TextInputMaskProps, 'type'>> {
  type?: TextInputMaskTypeProp;
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
  type,
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

  const OnChangeProp = (text: string, raw?: string) => {
    if (onChangeText) {
      onChangeText(text, raw);
    }
  };

  const onFocusProp = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const onBlurProp = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

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

        {type ? (
          <StyledInputMask
            {...props}
            type={type}
            refInput={innerref as any}
            style={overloadStyle}
            onChangeText={OnChangeProp}
            onFocus={onFocusProp}
            onBlur={onBlurProp}
            editable={editable}
            placeholderTextColor={colors.black.inactive}
            secureTextEntry={hidingPassword}
          />
        ) : (
          <StyledInput
            ref={innerref as any}
            {...props}
            style={overloadStyle}
            onChangeText={OnChangeProp}
            onFocus={onFocusProp}
            onBlur={onBlurProp}
            editable={editable}
            placeholderTextColor={colors.black.inactive}
            secureTextEntry={hidingPassword}
          />
        )}

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
