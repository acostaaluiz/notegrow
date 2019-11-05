import React from 'react';
import Abstract1 from './Abstract1';

export const ImagesNames = ['abstract1'] as const;

// Creates dynamic type from array
export type ImageNamesType = typeof ImagesNames[number];

interface ImageProps {
  name: ImageNamesType;
}

function Image({ name }: ImageProps) {
  switch (name) {
    case 'abstract1':
      return <Abstract1 />;
    default:
      return null;
  }
}

Image.defaultProps = {
  name: 'abstract1',
} as Partial<ImageProps>;

export default Image;
