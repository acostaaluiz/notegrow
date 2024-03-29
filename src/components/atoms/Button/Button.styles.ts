import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';

export interface TouchProps {
  iconized?: boolean;
  width?: string;
  inline?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  dark?: boolean;
}

interface ButtonThemeProps {
  theme: TouchProps
}

const renderWidth = (iconized?: boolean, inline?: boolean, width?: string) => {
  if (iconized) {
    return '60px'
  }
  if (inline) {
    return 'auto'
  }
  return width || '100%';
}

const touchBase = css<ButtonThemeProps>`
  display: flex;
  flex-flow: row;
  width: ${({ theme: { iconized, inline, width } }: ButtonThemeProps) => renderWidth(iconized, inline, width)};
  height: ${({ theme: { iconized, } }: ButtonThemeProps) => iconized ? '60px' : 'auto'};
  border-radius: ${({ theme: { iconized } }: ButtonThemeProps) => iconized ? '60px' : '20px'};
`;


export const TouchIOS = styled.TouchableOpacity<TouchProps>`
  ${touchBase}
`;

export const RippleContainer = styled.View<TouchProps>`
  ${touchBase}
`

export const TouchAndroid = styled.TouchableNativeFeedback<TouchProps>`
  ${touchBase}
`;


const renderButtonStyle = (secondary: boolean | undefined, disabled: boolean | undefined, dark: boolean | undefined) => {
  if (secondary) {
    let borderColor = colors.blue.secondary;
    if (disabled) {
      borderColor = dark ? colors.white.inactive : colors.black.inactive
    }
    return `
      background: transparent;
      border: 2px solid ${borderColor};
    `
  }

  if (dark) {
    return `
      background: ${disabled ? colors.white.disabled : colors.blue.secondary};
    `
  }

  return `
    background: ${disabled ? colors.black.disabled : colors.blue.secondary};
  `
}

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${({ theme: { iconized } }: ButtonThemeProps) => iconized ? '0' : `24px 16px`};
  ${touchBase}
  ${({ theme: { secondary, disabled, dark } }: ButtonThemeProps) => renderButtonStyle(secondary, disabled, dark)};
  width: ${({ theme: { iconized, inline, width } }: ButtonThemeProps) => renderWidth(iconized, inline, width)};
  height: ${({ theme: { iconized, } }: ButtonThemeProps) => iconized ? '60px' : 'auto'};
`;

export const renderTextStyle = (secondary?: boolean, disabled?: boolean, dark?: boolean) => {
  if (disabled) {
    return dark ? colors.white.inactive : colors.black.inactive;
  }
  if (!secondary || secondary && dark) {
    return colors.white.active
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

export const ButtonIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  ${({ theme: { iconized } }: ButtonThemeProps) => iconized ? '' : `margin-right: 12px`}
`;
