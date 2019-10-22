---
to: src/components/<%= type %>/<%= Name %>/<%= Name %>.tsx
---
import React from 'react';
import { Text } from 'react-native';

interface <%= Name %>Props {
  text: string;
}

function <%= Name %>({ text }: <%= Name %>Props) {
  return <Text>{text}</Text>;
}

<%= Name %>.defaultProps = {
  text: 'Hello World',
} as Partial<<%= Name %>Props>;

export default <%= Name %>;
