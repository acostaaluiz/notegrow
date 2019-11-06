import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';

const Cask = styled.View<{ theme: { dark: boolean } }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 80;
  padding: 0 15px;
  ${({ theme: { dark } }) => dark && `background-color: black;`}
`;

export default function CenterView({ children }: PropsWithChildren<{}>) {
  return <Cask>{children}</Cask>;
}
