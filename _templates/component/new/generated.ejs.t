---
to: src/components/<%= type %>/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
import React from 'react';
import { Text } from 'react-native';

interface <%= h.changeCase.pascalCase(name) %>Props {
  text: string;
}

function <%= h.changeCase.pascalCase(name) %>({ text }: <%= h.changeCase.pascalCase(name) %>Props) {
  return <Text>{text}</Text>;
}

<%= h.changeCase.pascalCase(name) %>.defaultProps = {
  text: 'Hello World',
} as Partial<<%= h.changeCase.pascalCase(name) %>Props>;

export default <%= h.changeCase.pascalCase(name) %>;
