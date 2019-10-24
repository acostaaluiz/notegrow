import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../scenes/LoginScreen';
import HomeScreen from '../scenes/HomeScreen';


const HomeNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Screen2: {
    screen: HomeScreen,
  },
  Screen3: {
    screen: HomeScreen,
  },
}, { initialRouteName: 'Home' })

const LoginNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  }
});

const AppNavigator = createSwitchNavigator({
  Login: LoginNavigator,
  Home: HomeNavigator
}, { initialRouteName: 'Login' });

export default createAppContainer(AppNavigator);
