const primary_blue = '#1F63AF';
const primary_red = '#EE4056';

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

export const fontColor = {
  active: '#212121',
  inactive: '#6b6b6b',
  disabled: '#9e9e9e'
}

export const fontColorDark = {
  active: '#FFFFFF',
  inactive: '#9f9fa0',
  disabled: '#7d7e7f'
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
  fontColor,
  fontColorDark
}
