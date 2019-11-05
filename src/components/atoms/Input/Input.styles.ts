import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import { fonts } from '../../../styles/fonts';

export const StyledInput = styled.TextInput<{ focus?: boolean, error?: boolean }>`
  height: 40px;
  width: 100%;
  padding: 0 10px;
  border: solid ${colors.blue.primary};
  border-color: ${(props) => props.error ? colors.red.primaryopc20 : colors.blue.primaryopc15};
  background-color: ${(props) => props.focus ? 'white' : colors.blue.primaryopc15};
  color: ${(props) => props.error ? colors.red.primaryopc20 : colors.black.active};
  border-radius: 8px;
`;

export const StyledText = styled.Text<{ error?: boolean }>`
  height: 40px;
  width: 100%;
  padding: 0 3px;
  margin-left: 16px;
  color: ${(props) => props.error ? colors.red.primary : colors.blue.primary};
`;
