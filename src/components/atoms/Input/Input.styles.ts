import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';
import { fonts, styledfont } from '../../../styles/fonts';
import { TextInputMask } from 'react-native-masked-text';

interface InputTheme {
  theme: {
    focus?: boolean,
    editable?: boolean,
    error?: boolean,
    hasLabel?: boolean | string
  }
}

export const InputView = styled.View`
  position: relative;
`;

export const PasswordViewerButton = styled.TouchableOpacity<InputTheme>`
  position: absolute;
  right: 0;
  top: ${ ({ theme: { hasLabel } }) => hasLabel ? 32 : 0};
  padding: 15px 15px 10px;
  z-index: 100;
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

const renderInputColor = (error?: boolean, focus?: boolean) => {
  if (error && !focus) {
    return colors.red.primary;
  }
  return colors.black.active;
}

const InputStyle = css<InputTheme>`
  ${styledfont.subtitle1}
  width: 100%;
  padding: ${ ({ theme: { hasLabel } }) => hasLabel ? 32 : 10}px 10px 10px;
  border: solid ${colors.blue.primary};
  border-color: ${({ theme: { error, editable, focus } }) => renderBorder(error, editable, focus)};
  background-color: ${({ theme: { focus } }) => focus ? 'transparent' : colors.blue.primaryopc15};
  color: ${({ theme: { error, focus } }) => renderInputColor(error, focus)};
  border-radius: 8px;
`;

export const StyledInput = styled.TextInput<InputTheme>`
  ${InputStyle}
`;

export const StyledInputMask = styled(TextInputMask) <InputTheme>`
  ${InputStyle}
`;

TextInputMask

const renderLabelColor = (error?: boolean, editable?: boolean, focus?: boolean) => {
  if (!editable) {
    return colors.black.disabled;
  }
  if (error && !focus) {
    return colors.red.primary;
  }
  return colors.blue.primary;
}

export const Label = styled.Text<InputTheme>`
  color: ${({ theme: { error, editable, focus } }) => renderLabelColor(error, editable, focus)};
  font-family: ${fonts.roboto.regular};
  font-size: 12px;
  letter-spacing: 0.4;
  line-height: 16;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const StyledText = styled.Text<InputTheme>`
  width: 100%;
  padding: 3px 3px 0;
  margin-left: 16px;
  color: ${({ theme: { error } }) => error ? colors.red.primary : colors.blue.primary};
`;
