import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select } from '@storybook/addon-knobs';
import Image, { ImagesNames, ImageNamesType } from './Image';
import CenterView from '../../../utils/Storybook/CenterView';

const stories = storiesOf('Images', module);

stories.addDecorator(withKnobs);

const useKnobs = (selected = ImagesNames[0]): [ImageNamesType] => {
  return [select('name', ImagesNames, selected)];
};

stories.add('Abstract1', () => {
  const [name] = useKnobs();
  return (
    <CenterView>
      <Image name={name} />
    </CenterView>
  );
});
