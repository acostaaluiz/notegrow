
const main = {
  backgroundColor: 'black',
  color: 'white',
}

const themes = {
  main,
}

export type Themes = typeof themes;
export interface ThemesInterface {
  theme: Themes;
}
export type withThemes<T> = ThemesInterface & T;

export default themes;
