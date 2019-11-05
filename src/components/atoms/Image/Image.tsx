import React from 'react';
import Abstract1 from './Abstract1';
import Logo from './Logo';

export const ImagesNames = [
  'abstract1',
  'logo',
  'logo-secondary',
  'logo-white',
] as const;

// Creates dynamic type from array
export type ImageNamesType = typeof ImagesNames[number];

interface ImageProps {
  name: ImageNamesType;
}

function Image({ name }: ImageProps) {
  switch (name) {
    case 'abstract1':
      return <Abstract1 />;
    case 'logo':
      return <Logo />;
    case 'logo-secondary':
      return <Logo type="secondary" />;
    case 'logo-white':
      return <Logo type="white" />;
    default:
      return null;
  }
}

Image.defaultProps = {
  name: 'abstract1',
} as Partial<ImageProps>;

export default Image;
