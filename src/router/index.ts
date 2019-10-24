import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../scenes/LoginScreen';

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
}, {
  initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);
