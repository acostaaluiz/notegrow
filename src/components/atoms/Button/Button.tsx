import React, { PropsWithChildren, ReactNode } from 'react';
import {
  Platform,
  TouchableWithoutFeedbackProps,
  TouchableNativeFeedback,
} from 'react-native';
import {
  ButtonContainer,
  ButtonText,
  TouchIOS,
  TouchAndroid,
  TouchProps,
} from './Button.styles';
import { ThemeProvider } from 'styled-components';
import colors from '../../../styles/colors';

interface ButtonInternalProps {
  title: string;
  disabled?: boolean;
}

type ButtonType = ButtonInternalProps &
  TouchProps &
  TouchableWithoutFeedbackProps;

interface TouchableType extends TouchableWithoutFeedbackProps {
  internal: ReactNode;
}

function TouchableContainer({ internal, ...props }: TouchableType) {
  if (Platform.OS === 'ios') {
    return <TouchIOS {...props}>{internal}</TouchIOS>;
  }
  return (
    <TouchAndroid
      {...props}
      background={TouchableNativeFeedback.Ripple('white')}>
      {internal}
    </TouchAndroid>
  );
}

function Button({ title, ...props }: ButtonType) {
  const { disabled, inline } = props;

  const internal = (
    <ButtonContainer>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );

  return (
    <ThemeProvider theme={{ disabled, inline }}>
      <TouchableContainer internal={internal} {...props} />
    </ThemeProvider>
  );
}

Button.defaultProps = {
  title: 'Hello World',
} as Partial<ButtonType>;

export default Button;
