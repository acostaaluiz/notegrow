import React from 'react';
import {
  BlueBackground,
  Title,
  Text,
  ImageBackground,
} from './BlueScreenTemplate.styled';
import { Image, Button, StatusBarComponent } from '../../atoms';
import { ThemeProvider } from 'styled-components';
import { View } from 'react-native';

interface BlueScreenTemplateProps {
  title: string;
  text: string;
  buttonText: string;
  onPress: () => void;
}

function BlueScreenTemplate({
  text,
  title,
  buttonText,
  onPress,
}: BlueScreenTemplateProps) {
  return (
    <ThemeProvider theme={{ dark: true }}>
      <>
        <StatusBarComponent />
        <BlueBackground>
          <ImageBackground>
            <Image name="abstract2" width="231" height="241" />
          </ImageBackground>
          <View>
            <Image width="56px" height="16px" name="logo-white" />
            <Title>{title}</Title>
            <Text>{text}</Text>
          </View>
          <Button title={buttonText} onPress={onPress} />
        </BlueBackground>
      </>
    </ThemeProvider>
  );
}

BlueScreenTemplate.defaultProps = {
  title: 'Hello',
  text: 'Hello World',
  buttonText: 'Hello World',
} as Partial<BlueScreenTemplateProps>;

export default BlueScreenTemplate;
