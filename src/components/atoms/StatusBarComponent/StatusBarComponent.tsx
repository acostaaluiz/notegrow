import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-safe-area-view';
import { StatusBar, StatusBarProps } from 'react-native';

interface StatusBarTheme {
  theme: {
    dark: boolean;
  };
}

const backgroundColor = (dark: boolean) => (dark ? 'rgb(44,77,148)' : 'white');
const barStyle = (dark: boolean): 'light-content' | 'dark-content' =>
  dark ? 'light-content' : 'dark-content';

const StatusBarStyled = styled.View<StatusBarTheme>`
  height: ${getStatusBarHeight()}px;
  background-color: ${({ theme: { dark } }) => backgroundColor(dark)};
`;

function StatusBarComponent({
  theme: { dark },
  ...props
}: StatusBarTheme & StatusBarProps) {
  return (
    <>
      <StatusBar
        backgroundColor={backgroundColor(dark)}
        barStyle={barStyle(dark)}
        {...props}
      />
      <StatusBarStyled />
    </>
  );
}

export default withTheme(StatusBarComponent);
