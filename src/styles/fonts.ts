export const fonts = {
  votorantim: {
    regular: 'VotorantimSans-Regular',
    medium: 'VotorantimSans-Medium',
    bold: 'VotorantimSans-Bold',
  },
  roboto: {
    regular: 'Roboto-Regular',
    italic: 'Roboto-Italic',
    medium: 'Roboto-Medium',
    mediumitalic: 'Roboto-MediumItalic',
  }
}

export const styledfont = {
  h1: `
    font-family: ${fonts.votorantim.bold};
    font-size: 56px;
    letter-spacing: -0.8;
    line-height: 70px;
  `,
  h2: `
    font-family: ${fonts.votorantim.bold};
    font-size: 32;
    letter-spacing: -1.5;
    line-height: 40px;
  `,
  h3: `
    font-family: ${fonts.votorantim.bold};
    font-size: 24;
    letter-spacing: -1;
    line-height: 28px;
  `,
  h4: `
    font-family: ${fonts.votorantim.regular};
    font-size: 24;
    letter-spacing: -1;
    line-height: 28px;
  `,
  h5: `
    font-family: ${fonts.votorantim.medium};
    font-size: 16;
    letter-spacing: -0.5;
    line-height: 20px;
  `,
  subtitle1: `
    font-family: ${fonts.roboto.regular};
    font-size: 16;
    letter-spacing: 1.5;
    line-height: 24px;
  `,
  subtitle2: `
    font-family: ${fonts.roboto.medium};
    font-size: 14;
    letter-spacing: 0.1;
    line-height: 24px;
  `,
  body1: `
    font-family: ${fonts.roboto.regular};
    font-size: 16;
    letter-spacing: 0.5;
    line-height: 24px;
  `,
  body2: `
    font-family: ${fonts.roboto.regular};
    Font-size: 16
    letter-spacing: 0.25
    line-height: 20px;
  `,
}
