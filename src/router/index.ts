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
import SignUpPasswordScreen from '../scenes/SignUpPasswordScreen';
import SignUpPasswordConfirmationScreen from '../scenes/SignUpPasswordConfirmationScreen';
import SignUpCompleteScreen from '../scenes/SignUpCompleteScreen';

const HomeNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Screen2: {
      screen: HomeScreen,
    },
    Preferences: {
      screen: UserPreferences,
      navigationOptions: {
        tabBarLabel: 'Preferências',
      },
    },
  },
  { initialRouteName: 'Home' },
);

const SignUpNavigation = createStackNavigator(
  {
    SignUp: SignUpBlueScreen,
    SignUpForm: SignUpFormScreen,
    SignUpPassword: SignUpPasswordScreen,
    SignUpPasswordConfirmation: SignUpPasswordConfirmationScreen,
    SignUpComplete: SignUpCompleteScreen,
  },
  {
    initialRouteName: 'SignUp',
    ...noHeader,
  },
);

const LoginNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    LoginPassword: LoginPasswordScreen,
    SignUp: SignUpNavigation,
  },
  {
    initialRouteName: 'Login',
    ...noHeader,
  },
);

const FAQNavigator = createStackNavigator({
  FAQ: FAQScreen,
});

const AppNavigator = createSwitchNavigator(
  {
    AppOpened: AppOpened,
    Login: LoginNavigator,
    Home: HomeNavigator,
    FAQ: FAQNavigator,
  },
  { initialRouteName: 'Login' },
);

export default createAppContainer(AppNavigator);
