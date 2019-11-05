import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../scenes/LoginScreen';
import AppOpened from '../scenes/AppOpened';
import HomeScreen from '../scenes/HomeScreen';
import UserPreferences from '../scenes/UserPreferencesScreen';
import FAQScreen from '../scenes/FAQScreen';
import SignUpBlueScreen from '../scenes/SignUpBlueScreen';

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
  },
  SignUp: { screen: SignUpBlueScreen, navigationOptions: { header: null } }
}, { initialRouteName: 'SignUp' });

const FAQNavigator = createStackNavigator({
  FAQ: {
    screen: FAQScreen,
  }
});

const AppNavigator = createSwitchNavigator({
  AppOpened: AppOpened,
  Login: LoginNavigator,
  Home: HomeNavigator,
  FAQ: FAQNavigator
}, { initialRouteName: 'AppOpened' });

export default createAppContainer(AppNavigator);
