import React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import Input from './Input';
import { useState } from '@storybook/addons';
import CenterView from '../../../utils/Storybook/CenterView';

const stories = storiesOf('Components', module);

stories.add('Input', () => {
  const [value, setValue] = useState('');
  return (
    <CenterView>
      <Input
        value={value}
        onChangeText={text => setValue(text)}
        style={{ width: 200 }}
      />
    </CenterView>
  );
});
