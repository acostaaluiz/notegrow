import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../scenes/LoginScreen';
import LoginPasswordScreen from '../scenes/LoginPasswordScreen';
import AppOpened from '../scenes/AppOpened';
import HomeScreen from '../scenes/HomeScreen';
import UserPreferences from '../scenes/UserPreferencesScreen';
import FAQScreen from '../scenes/FAQScreen';
import SignUpBlueScreen from '../scenes/SignUpBlueScreen';
import SignUpFormScreen from '../scenes/SignUpFormScreenScreen';
import { noHeader } from './configurations';

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

const SignUpNavigation = createStackNavigator({
  SignUpBlue: SignUpBlueScreen,
  SignUpForm: SignUpFormScreen
}, {
  ...noHeader
})


const LoginStackNavigator = createStackNavigator({
  LoginDocument: LoginScreen,
  LoginPassword: LoginPasswordScreen,
}, {
  initialRouteName: 'LoginDocument',
  ...noHeader
});

const LoginNavigator = createStackNavigator({
  Login: LoginStackNavigator,
  SignUp: SignUpNavigation
}, {
  initialRouteName: 'Login',
  ...noHeader
});

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
