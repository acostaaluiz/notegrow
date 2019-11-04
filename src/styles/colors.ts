const primary_blue = '#1F63AF';
const primary_red = '#EE4056';
const primary_black = '#000000';
const primary_white = '#FFFFFF';

export const blue = {
  primary: primary_blue,
  primaryopc15: addAlpha(primary_blue, 0.15),
  primaryopc20: addAlpha(primary_blue, 0.20),
  secondary: '#00A5D5'
}

export const red = {
  primary: primary_red,
  primaryopc20: addAlpha(primary_red, 0.20)
}

export const black = {
  active: addAlpha(primary_black, 0.87),
  inactive: addAlpha(primary_black, 0.58),
  disabled: addAlpha(primary_black, 0.38)
}

export const white = {
  active: primary_white,
  inactive: addAlpha(primary_white, 0.54),
  disabled: addAlpha(primary_white, 0.38)
}

export const comomColors = {
}

export function addAlpha(color: string, opacity: number): string {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

export default {
  blue,
  red,
  black,
  white
}
