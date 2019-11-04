import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from './Button';

storiesOf('Button', module).add('normalButton', () => (
  <Button title="Hey there" />
));
