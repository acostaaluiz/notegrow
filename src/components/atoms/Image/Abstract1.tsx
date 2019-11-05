import React from 'react';
import { Path, Circle, Rect, SvgProps } from 'react-native-svg';
import SVGContainer from './SvgContainer';

function Abstract1(props: SvgProps) {
  return (
    <SVGContainer {...props} viewBox="0 0 359.5 151.52">
      <Circle
        cx="57.5"
        cy="30"
        r="29.5"
        fill="none"
        stroke="#00a5d5"
        stroke-miterlimit="10"
      />
      <Circle
        cx="329.5"
        cy="121.5"
        r="29.5"
        fill="none"
        stroke="#00a5d5"
        stroke-miterlimit="10"
      />
      <Circle cx="329.5" cy="121.5" r="10.5" fill="#00a5d5" />
      <Rect
        x="187"
        y="1.5"
        width="142"
        height="58"
        rx="29"
        fill="none"
        stroke="#00a5d5"
        stroke-miterlimit="10"
        opacity=".5"
      />
      <Circle cx="117.5" cy="90" r="30" fill="#1f63af" />
      <Path
        d="M64.97 151.5v-1h0a29 29 0 00-29-29H0"
        fill="none"
        stroke="#5e85b6"
        stroke-miterlimit="10"
      />
      <Path
        fill="#1f63af"
        opacity=".5"
        d="M138.71 68.79l-42.42 42.42 40.28 40.29h84.86l-82.72-82.71z"
      />
    </SVGContainer>
  );
}

export default Abstract1;
