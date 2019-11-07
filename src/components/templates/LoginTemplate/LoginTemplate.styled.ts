import styled from "styled-components/native";
import colors from "../../../styles/colors";
import { styledfont } from "../../../styles/fonts";

export const WhiteBackground = styled.View`
  background-color: ${colors.white.active};
  flex: 1;
  padding: 50px 28px 32px;
  justify-content: space-between;
  position: relative;
`;

export const ImageBackground = styled.View`
position: absolute;
bottom: 0;
`;

export const Title = styled.Text`
  ${styledfont.h3}
  color: ${colors.blue.primary};
  width: 72%;
  margin-bottom: 36px;
  margin-top: 62px;
`;

export const Text = styled.Text`
  ${styledfont.body1}
  color: ${colors.white.active};
  width: 85%;
`;
