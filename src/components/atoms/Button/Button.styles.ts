import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';

export interface TouchProps {
  width?: string;
  inline?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  dark?: boolean;
}

interface ButtonThemeProps {
  theme: TouchProps
}

const touchBase = css<ButtonThemeProps>`
  width: ${({ theme: { inline, width } }: ButtonThemeProps) => ((width) || (inline ? 'auto' : '100%'))};
  border-radius: 20px;
`;

export const TouchIOS = styled.TouchableOpacity<TouchProps>`
  ${touchBase}
`;

export const TouchAndroid = styled.TouchableNativeFeedback<TouchProps>`
  ${touchBase}
`;

const renderButtonStyle = (secondary: boolean | undefined, disabled: boolean | undefined, dark: boolean | undefined) => {
  if (secondary) {
    let borderColor = colors.blue.secondary;
    if (disabled) {
      borderColor = dark ? colors.fontColorDark.inactive : colors.fontColor.inactive
    }
    return `
      background: transparent;
      border: 2px solid ${borderColor};
    `
  }
  return `
    background: ${disabled ? colors.fontColor.disabled : colors.blue.secondary};
  `
}

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  ${touchBase}
  ${({ theme: { secondary, disabled, dark } }: ButtonThemeProps) => renderButtonStyle(secondary, disabled, dark)};
`;

const renderTextStyle = (secondary: boolean | undefined, disabled: boolean | undefined, dark: boolean | undefined) => {
  if (disabled) {
    return dark ? colors.fontColorDark.inactive : colors.fontColor.inactive;
  }
  if (!secondary || secondary && dark) {
    return colors.fontColorDark.active
  }
  return colors.blue.primary;
}

export const ButtonText = styled.Text`
  font-family: ${fonts.votorantim.medium};
  font-size: 16px;
  letter-spacing: 0.5;
  line-height: 16px;
  text-align: center;
  color: ${({ theme: { disabled, secondary, dark } }: ButtonThemeProps) => renderTextStyle(secondary, disabled, dark)};
`;
