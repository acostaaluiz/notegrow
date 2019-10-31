import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';

export interface TouchProps {
  width?: number | string;
  inline?: boolean;
}

const touchBase = css<TouchProps>`
  width: ${({ width, inline }) => (width || inline ? 'auto' : '100%')};
`;
export const TouchIOS = styled.TouchableOpacity<TouchProps>`${touchBase}`;
export const TouchAndroid = styled.TouchableNativeFeedback<TouchProps>`${touchBase}`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  background: ${colors.blue.secondary};
  padding: 24px 16px;
  width: 100%;
  border-radius: 16px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5;
  line-height: 16px;
  text-align: center;
  color: ${colors.fontColorDark.active};
`;
