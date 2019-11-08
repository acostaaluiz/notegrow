import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled, { withTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconNames from '../Icon/IconNames';
import colors from '../../../styles/colors';

interface BackButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  icon?: IconNames;
  theme: { dark?: boolean };
}

export const BackTouchable = styled.TouchableOpacity`
  padding: 14px;
  margin-top: -14px;
  margin-left: -16px;
`;

function BackButton({ onPress, icon, theme, ...props }: BackButtonProps) {
  const dark = theme && theme.dark;
  return (
    <BackTouchable onPress={onPress} {...props}>
      <Icon
        name={icon as string}
        color={dark ? colors.white.active : colors.blue.primary}
        size={16}
      />
    </BackTouchable>
  );
}

BackButton.defaultProps = {
  onPress() {},
  icon: 'arrow-back',
  theme: {},
} as Partial<BackButtonProps>;

export default withTheme(BackButton);
