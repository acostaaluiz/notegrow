module.exports = {
  root: true,
  extends: [
    'airbnb',
    '@react-native-community',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  env: {
    jest: true,
  },
  globals: {
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
  plugins: ['prettier'],
};
