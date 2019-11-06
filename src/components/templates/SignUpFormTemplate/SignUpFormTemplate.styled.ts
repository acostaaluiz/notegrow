import styled from "styled-components/native";
import { styledfont } from "../../../styles/fonts";
import colors from "../../../styles/colors";

export const Page = styled.View`
  flex: 1;
  padding: 20px 28px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  ${styledfont.h3}
  color: ${colors.blue.primary};
  width: 72%;
  margin-bottom: 36px;
  margin-top: 136px;
`;
