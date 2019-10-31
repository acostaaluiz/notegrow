import React from 'react';
import {
  Platform,
  View,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native';
import {
  ButtonContainer,
  ButtonText,
  TouchIOS,
  TouchAndroid,
  TouchProps,
} from './Button.styles';
import { ThemeProvider } from 'styled-components';

type TouchType = TouchableOpacityProps | TouchableNativeFeedbackProps;

interface ButtonInternalProps {
  title: string;
}

interface ButtonProps extends ButtonInternalProps, TouchProps {
  disabled?: boolean;
  inactive?: boolean;
}

type ButtonType = ButtonProps;

function ButtonInternal({ title }: ButtonInternalProps) {
  return (
    <ButtonContainer>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}

function ButtonView({ title, ...props }: ButtonType) {
  if (Platform.OS === 'ios')
    return (
      <TouchIOS {...props}>
        <ButtonInternal title={title} />
      </TouchIOS>
    );

  return (
    <TouchAndroid {...props}>
      <ButtonInternal title={title} />
    </TouchAndroid>
  );
}

function Button(props: ButtonType) {
  const { inactive, disabled } = props;
  return (
    <ThemeProvider theme={{ inactive, disabled }}>
      <ButtonView {...props} />
    </ThemeProvider>
  );
}

Button.defaultProps = {
  text: 'Hello World',
} as Partial<ButtonType>;

export default Button;
