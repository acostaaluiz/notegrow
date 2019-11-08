import React from 'react';
import {
  SvgProps,
  Path,
  Defs,
  ClipPath,
  Rect,
  G,
  Circle,
} from 'react-native-svg';
import SVGContainer from './SvgContainer';

export default function Abstract3(props: SvgProps) {
  return (
    <SVGContainer viewBox="0 0 360 238" {...props}>
      <Circle cx="242.26" cy="96" r="32" fill="#1f63af" />
      <Circle cx="304" cy="160" r="31.5" fill="none" stroke="#00a5d5" />
      <Path
        d="M304.5 0A31.5 31.5 0 00336 31.5h24"
        fill="none"
        stroke="#1f63af"
      />
      <Path
        fill="#3371b6"
        opacity=".3"
        d="M219.63 118.63l45.25-45.26L191.51 0H101l118.63 118.63z"
      />
    </SVGContainer>
  );
}
