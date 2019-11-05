import React from 'react';
import { Path, SvgProps } from 'react-native-svg';
import colors from '../../../styles/colors';
import SVGContainer from './SvgContainer';

interface LogoProp extends SvgProps {
  type?: 'white' | 'primary' | 'secondary';
}

function Logo({ type, ...svgProps }: LogoProp) {
  let color: string;

  switch (type) {
    case 'white':
      color = colors.white.active;
      break;
    case 'secondary':
      color = colors.blue.secondary;
      break;
    default:
      color = colors.blue.primary;
      break;
  }

  return (
    <SVGContainer {...svgProps} viewBox="0 0 56 16">
      <Path
        d="M32.18 0c4.341 0 7.86 3.562 7.86 7.957 0 4.394-3.519 7.956-7.86 7.956-4.34 0-7.859-3.562-7.859-7.956 0-4.395 3.52-7.957 7.86-7.957zM18.234 0c1.522 0 2.73.532 3.627 1.594.895 1.063 1.343 2.54 1.343 4.432v6.86c0 1.462-1.17 2.647-2.615 2.647-1.444 0-2.615-1.185-2.615-2.648V6.7a6 6 0 00-.006-.275c0-.011-.002-.02-.003-.031a4.665 4.665 0 00-.028-.322c-.057-.437-.172-.772-.353-.996-.26-.322-.66-.482-1.2-.483-.712 0-1.434.342-2.166 1.024v7.27c0 1.462-1.171 2.647-2.616 2.647-1.444 0-2.615-1.185-2.615-2.648V6.7a6 6 0 00-.006-.275c-.028-.618-.156-1.067-.384-1.349-.26-.322-.66-.482-1.199-.483-.713 0-1.435.342-2.167 1.024v7.27c0 1.462-1.17 2.647-2.615 2.647C1.171 15.533 0 14.348 0 12.885V.38h2.615c.917 0 1.723.48 2.19 1.203C6.107.528 7.587 0 9.246 0c.037 0 .071.004.107.005L9.42 0c.847 0 1.599.175 2.254.526a4.126 4.126 0 011.589 1.522C14.688.683 16.345 0 18.233 0zm24.391.38a2.62 2.62 0 012.5 1.863l2.317 8.016L50.33.38h5.634l-4.686 12.473a4.108 4.108 0 01-3.838 2.68 4.109 4.109 0 01-3.839-2.68L38.917.38zM32.181 5.295c-1.453 0-2.63 1.192-2.63 2.662s1.177 2.662 2.63 2.662c1.452 0 2.63-1.192 2.63-2.662s-1.178-2.662-2.63-2.662z"
        fill={color}
        fill-rule="evenodd"
      />
    </SVGContainer>
  );
}

export default Logo;
