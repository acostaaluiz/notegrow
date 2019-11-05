import React, { PropsWithChildren } from 'react';
import { Svg, SvgProps } from 'react-native-svg';

function SVGContainer({
  width,
  height,
  children,
  ...svgProps
}: PropsWithChildren<SvgProps>) {
  const renderedWith = width || '100%';
  const renderedHeight = height || '100%';
  return (
    <Svg width={renderedWith} height={renderedHeight} {...svgProps}>
      {children}
    </Svg>
  );
}

export default SVGContainer;
