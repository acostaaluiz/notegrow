module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  env: {
    jest: true,
  },
  globals: {
    window: false,
    fetch: false,
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
};
