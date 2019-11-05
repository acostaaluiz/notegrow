import React from 'react';
import Abstract1 from './Abstract1';
import Logo from './Logo';
import { SvgProps } from 'react-native-svg';
import Abstract2 from './Abstract2';

export const ImagesNames = [
  'abstract1',
  'abstract2',
  'logo',
  'logo-secondary',
  'logo-white',
] as const;

// Creates dynamic type from array
export type ImageNamesType = typeof ImagesNames[number];

interface ImageProps extends SvgProps {
  name: ImageNamesType;
}

function Image({ name, ...props }: ImageProps) {
  switch (name) {
    case 'abstract1':
      return <Abstract1 {...props} />;
    case 'abstract2':
      return <Abstract2 {...props} />;
    case 'logo':
      return <Logo {...props} />;
    case 'logo-secondary':
      return <Logo {...props} type="secondary" />;
    case 'logo-white':
      return <Logo {...props} type="white" />;
    default:
      return null;
  }
}

Image.defaultProps = {
  name: 'abstract1',
} as Partial<ImageProps>;

export default Image;
