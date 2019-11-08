import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

const Container = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background: ${colors.blue.primaryopc20};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

function LoadingModal() {
  return (
    <Container>
      <ActivityIndicator animating color={colors.white.active} size="large" />
    </Container>
  );
}

export default LoadingModal;
