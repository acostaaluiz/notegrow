import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';

export interface TouchProps {
  width?: string;
  inline?: boolean;
  disabled?: boolean;
  secondary?: boolean;
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

const renderButtonStyle = (secondary: boolean | undefined, disabled: boolean | undefined) => {
  if (secondary) {
    return `
      background: transparent;
      border: 2px solid ${disabled ? colors.fontColor.inactive : colors.blue.secondary};
    `
  }
  return `
    background: ${disabled ? '#e0e0e0' : colors.blue.secondary};
  `
}

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  ${touchBase}
  ${({ theme: { secondary, disabled } }: ButtonThemeProps) => renderButtonStyle(secondary, disabled)};
`;

const renderTextStyle = (secondary: boolean | undefined, disabled: boolean | undefined) => {
  if (disabled) {
    return colors.fontColor.inactive;
  }
  return secondary ? colors.blue.primary : colors.fontColorDark.active;
}

export const ButtonText = styled.Text`
  font-family: ${fonts.votorantim.medium};
  font-size: 16px;
  letter-spacing: 0.5;
  line-height: 16px;
  text-align: center;
  color: ${({ theme: { disabled, secondary } }: ButtonThemeProps) => renderTextStyle(secondary, disabled)};
`;
