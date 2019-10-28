import React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import Input from './Input';
import { useState } from '@storybook/addons';

const stories = storiesOf('Components', module);

stories.add('Input', () => {
  const [value, setValue] = useState('');
  return <Input value={value} onChangeText={text => setValue(text)} />;
});
