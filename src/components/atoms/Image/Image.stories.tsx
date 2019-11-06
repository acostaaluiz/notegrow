import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select } from '@storybook/addon-knobs';
import Image, { ImagesNames, ImageNamesType } from './Image';
import CenterView from '../../../utils/Storybook/CenterView';
import { ThemeProvider } from 'styled-components';

const stories = storiesOf('Images', module);

stories.addDecorator(withKnobs);

const useKnobs = (
  selected: ImageNamesType = ImagesNames[0],
): [ImageNamesType] => {
  return [select('name', ImagesNames, selected)];
};

const render = (selected: ImageNamesType) => () => {
  const [name] = useKnobs(selected);
  return (
    <ThemeProvider theme={{ dark: selected === 'logo-white' }}>
      <CenterView>
        <Image name={name} />
      </CenterView>
    </ThemeProvider>
  );
};

ImagesNames.forEach((name: ImageNamesType) => {
  stories.add(name as string, render(name));
});
