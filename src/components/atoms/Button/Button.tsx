import React, { ReactNode } from 'react';
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

import colors from '../../../styles/colors';
import { ThemeProvider } from 'styled-components';
import ButtonIcon from './ButtonIcon';
import IconNames from '../Icon/IconNames';

interface ButtonInternalProps {
  title?: string;
  icon?: IconNames;
}

type ButtonType = ButtonInternalProps &
  TouchProps &
  TouchableWithoutFeedbackProps;

interface TouchableType extends TouchProps, TouchableWithoutFeedbackProps {
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

function Button({ title, icon, width, inline, ...props }: ButtonType) {
  const { disabled, secondary } = props;

  // Can't use internal as an external component because
  // of a TouchableNativeFeedback bug with styled components
  const internal = (
    <ButtonContainer>
      {icon && <ButtonIcon icon={icon} />}
      {title && <ButtonText>{title}</ButtonText>}
    </ButtonContainer>
  );

  return (
    <ThemeProvider
      theme={{
        disabled,
        inline,
        width,
        secondary,
        iconized: icon && !title,
      }}>
      <TouchableContainer internal={internal} inline={inline} {...props} />
    </ThemeProvider>
  );
}

Button.defaultProps = {} as Partial<ButtonType>;

export default Button;
