import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';

export interface TouchProps {
  width?: string;
  inline?: boolean;
  disabled?: boolean;
}

interface ButtonThemeProps {
  theme: TouchProps
}

const touchBase = css<ButtonThemeProps>`
  width: ${({ theme: { inline, width } }: ButtonThemeProps) => ((width) || (inline ? 'auto' : '100%'))};
  border-radius: 20px;
`;

export const TouchIOS = styled.TouchableHighlight<TouchProps>`
  ${touchBase}
`;

export const TouchAndroid = styled.TouchableNativeFeedback<TouchProps>`
  ${touchBase}
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  background: ${({ theme: { disabled } }: ButtonThemeProps) => disabled ? '#e0e0e0' : colors.blue.secondary};
  padding: 24px 16px;
  ${touchBase}
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5;
  line-height: 16px;
  text-align: center;
  color: ${({ theme: { disabled } }: ButtonThemeProps) => disabled ? colors.fontColor.inactive : colors.fontColorDark.active};
`;
