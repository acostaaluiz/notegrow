import styled from "styled-components/native";
import { styledfont } from "../../../styles/fonts";
import colors from "../../../styles/colors";

export const Page = styled.View`
  flex: 1;
  padding: 34px 28px 20px;
  justify-content: flex-end;
  position: relative;
`;

export const Title = styled.Text`
  ${styledfont.h3}
  color: ${colors.blue.primary};
  width: 72%;
  margin-bottom: 33px;
  margin-top: 50px;
`;

export const Text = styled.Text`
  ${styledfont.body1}
  color: ${colors.blue.primary};
  width: 65%;
  margin-bottom: 47px;
`;
