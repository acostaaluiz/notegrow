import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import { fonts, styledfont } from '../../../styles/fonts';

export const InputView = styled.View`
  position: relative;
`;

const renderBorder = (error?: boolean, editable?: boolean, focus?: boolean) => {
  if (!editable) {
    return colors.black.disabled;
  }
  if (error && !focus) {
    return colors.red.primaryopc20;
  }
  return colors.blue.primaryopc20;
}

export const StyledInput = styled.TextInput<{ focus?: boolean, error?: boolean, hasLabel?: boolean | string }>`
  ${styledfont.subtitle1}
  width: 100%;
  padding: ${ ({ hasLabel }) => hasLabel ? 32 : 16}px 10px 10px;
  border: solid ${colors.blue.primary};
  border-color: ${({ error, editable, focus }) => renderBorder(error, editable, focus)};
  background-color: ${({ focus }) => focus ? 'transparent' : colors.blue.primaryopc15};
  color: ${({ error }) => error ? colors.red.primaryopc20 : colors.black.active};
  border-radius: 8px;
`;

const renderLabelColor = (error?: boolean, editable?: boolean, focus?: boolean) => {
  if (!editable) {
    return colors.black.disabled;
  }
  if (error && !focus) {
    return colors.red.primary;
  }
  return colors.blue.primary;
}

export const Label = styled.Text<{ editable?: boolean; focus?: boolean; error?: boolean }>`
  color: ${({ error, editable, focus }) => renderLabelColor(error, editable, focus)};
  font-family: ${fonts.roboto.regular};
  font-size: 12px;
  letter-spacing: 0.4;
  line-height: 16;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const StyledText = styled.Text<{ error?: boolean }>`
  width: 100%;
  padding: 3px 3px 0;
  margin-left: 16px;
  color: ${({ error }) => error ? colors.red.primary : colors.blue.primary};
`;
