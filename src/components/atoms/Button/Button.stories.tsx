import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from './Button';
import IconNames from '../Icon/IconNames.js';
import CenterView from '../../../utils/Storybook/CenterView';
import { ThemeProvider } from 'styled-components';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

const Spacer = () => <View style={{ height: 10 }} />;

stories.add('All light normal', () => (
  <CenterView>
    <Button title="Normal" />
    <Spacer />
    <Button title="Com ícone" icon="favorite" />
    <Spacer />
    <Button title="Inline" inline />
    <Spacer />
    <Button title="Inline com ícone" icon="favorite" inline />
    <Spacer />
    <Button title="Desabilitado" disabled />
    <Spacer />
    <Button title="Desabilitado com ícone" icon="favorite" disabled />
    <Spacer />
    <Button title="Desabilitado inline" inline disabled />
    <Spacer />
    <Button
      title="Desabilitado Inline com ícone"
      icon="favorite"
      disabled
      inline
    />
  </CenterView>
));

stories.add('All light secondary', () => (
  <CenterView>
    <Button title="Normal" secondary />
    <Spacer />
    <Button title="Com ícone" icon="favorite" secondary />
    <Spacer />
    <Button title="Inline" inline secondary />
    <Spacer />
    <Button title="Inline com ícone" icon="favorite" inline secondary />
    <Spacer />
    <Button title="Desabilitado" disabled secondary />
    <Spacer />
    <Button title="Desabilitado com ícone" icon="favorite" disabled secondary />
    <Spacer />
    <Button title="Desabilitado inline" inline disabled secondary />
    <Spacer />
    <Button
      title="Desabilitado Inline com ícone"
      icon="favorite"
      disabled
      inline
      secondary
    />
  </CenterView>
));

stories.add('All light icon only', () => (
  <CenterView>
    <Button icon="favorite" />
    <Spacer />
    <Button icon="favorite" secondary />
    <Spacer />
    <Button icon="favorite" disabled />
    <Spacer />
    <Button icon="favorite" disabled secondary />
  </CenterView>
));

stories.add('All dark normal', () => (
  <ThemeProvider theme={{ dark: true }}>
    <CenterView>
      <Button title="Normal" />
      <Spacer />
      <Button title="Com ícone" icon="favorite" />
      <Spacer />
      <Button title="Inline" inline />
      <Spacer />
      <Button title="Inline com ícone" icon="favorite" inline />
      <Spacer />
      <Button title="Desabilitado" disabled />
      <Spacer />
      <Button title="Desabilitado com ícone" icon="favorite" disabled />
      <Spacer />
      <Button title="Desabilitado inline" inline disabled />
      <Spacer />
      <Button
        title="Desabilitado Inline com ícone"
        icon="favorite"
        disabled
        inline
      />
    </CenterView>
  </ThemeProvider>
));

stories.add('All dark secondary', () => (
  <ThemeProvider theme={{ dark: true }}>
    <CenterView>
      <Button title="Normal" secondary />
      <Spacer />
      <Button title="Com ícone" icon="favorite" secondary />
      <Spacer />
      <Button title="Inline" inline secondary />
      <Spacer />
      <Button title="Inline com ícone" icon="favorite" inline secondary />
      <Spacer />
      <Button title="Desabilitado" disabled secondary />
      <Spacer />
      <Button
        title="Desabilitado com ícone"
        icon="favorite"
        disabled
        secondary
      />
      <Spacer />
      <Button title="Desabilitado inline" inline disabled secondary />
      <Spacer />
      <Button
        title="Desabilitado Inline com ícone"
        icon="favorite"
        disabled
        inline
        secondary
      />
    </CenterView>
  </ThemeProvider>
));

stories.add('All dark icon only', () => (
  <ThemeProvider theme={{ dark: true }}>
    <CenterView>
      <Button icon="favorite" />
      <Spacer />
      <Button icon="favorite" secondary />
      <Spacer />
      <Button icon="favorite" disabled />
      <Spacer />
      <Button icon="favorite" disabled secondary />
    </CenterView>
  </ThemeProvider>
));

const useKnobs = (
  title = 'Olá Mundo',
  icon = '',
  disabled = false,
  secondary = false,
  inline = false,
  dark = false,
): [string, IconNames | undefined, boolean, boolean, boolean, boolean] => {
  return [
    text('title', title),
    text('icon', icon) as IconNames | undefined,
    boolean('disabled', disabled),
    boolean('secondary', secondary),
    boolean('inline', inline),
    boolean('dark', dark),
  ];
};

stories.add('knobs', () => {
  const [title, icon, disabled, secondary, inline, dark] = useKnobs();

  return (
    <ThemeProvider theme={{ dark }}>
      <CenterView>
        <Button
          title={title}
          disabled={disabled}
          secondary={secondary}
          inline={inline}
          icon={icon}
        />
        <Text>{dark ? 'dark' : null}</Text>
      </CenterView>
    </ThemeProvider>
  );
});
