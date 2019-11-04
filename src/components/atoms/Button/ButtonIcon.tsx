import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ButtonIconContainer, renderTextStyle } from './Button.styles';
import { withTheme } from 'styled-components';
import IconNames from '../Icon/IconNames';

interface ButtonIconInterface {
  icon: IconNames;
  inline?: boolean;
  theme: {
    secondary?: boolean;
    disabled?: boolean;
    dark?: boolean;
    iconized?: boolean;
  };
}

function ButtonIcon({
  icon,
  theme: { secondary, disabled, dark, iconized },
}: ButtonIconInterface) {
  if (!Icon.hasIcon(icon as string)) {
    return null;
  }

  const fillColor = renderTextStyle(secondary, disabled, dark);
  const fontSize = iconized ? 20 : 14;
  return (
    <ButtonIconContainer>
      <Icon name={icon} color={fillColor} size={fontSize} />
    </ButtonIconContainer>
  );
}

export default withTheme(ButtonIcon as any);
