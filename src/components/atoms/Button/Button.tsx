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
}

type ButtonType = ButtonInternalProps &
  TouchProps &
  TouchableWithoutFeedbackProps;

interface TouchableType extends ButtonType {
  internal: ReactNode;
}

function TouchableContainer({ internal, secondary, ...props }: TouchableType) {
  if (Platform.OS === 'ios') {
    return <TouchIOS {...props}>{internal}</TouchIOS>;
  }
  return (
    <TouchAndroid
      {...props}
      background={TouchableNativeFeedback.Ripple(
        secondary ? colors.blue.secondary : colors.fontColorDark.active,
      )}>
      {internal}
    </TouchAndroid>
  );
}

function Button({ title, width, inline, ...props }: ButtonType) {
  const { disabled, secondary } = props;

  // Can't use internal as an external component because
  // of a TouchableNativeFeedback bug with styled components
  const internal = (
    <ButtonContainer>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );

  return (
    <ThemeProvider theme={{ disabled, inline, width, secondary }}>
      <TouchableContainer internal={internal} {...props} />
    </ThemeProvider>
  );
}

Button.defaultProps = {
  title: 'Hello World',
} as Partial<ButtonType>;

export default Button;
