import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../scenes/LoginScreen';
import AppOpened from '../scenes/AppOpened';
import HomeScreen from '../scenes/HomeScreen';
import UserPreferences from '../scenes/UserPreferencesScreen';

const HomeNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Screen2: {
    screen: HomeScreen,
  },
  Preferences: {
    screen: UserPreferences,
    navigationOptions: {
      tabBarLabel: 'Preferências'
    }
  },
}, { initialRouteName: 'Home' })

const LoginNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  }
});

const AppNavigator = createSwitchNavigator({
  AppOpened: AppOpened,
  Login: LoginNavigator,
  Home: HomeNavigator
}, { initialRouteName: 'AppOpened' });

export default createAppContainer(AppNavigator);
