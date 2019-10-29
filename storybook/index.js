/* eslint-disable import/no-extraneous-dependencies */
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import requireContext from 'require-context.macro';

import './rn-addons';

const req = requireContext('../src', true, /\.stories\.tsx?$/);

// import stories
configure(() => req.keys().forEach(filename => req(filename)), module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
