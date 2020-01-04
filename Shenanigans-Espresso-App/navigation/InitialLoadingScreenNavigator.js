import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import InitialLoadingScreen from '../screens/InitialLoadingScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const InitialScreenNavigator = createStackNavigator({
	InitialLogin: InitialLoadingScreen,
	Login: {
		screen: LoginScreen
	},
	Signup: {
		screen: SignupScreen
	},
	Home: {
		screen: HomeScreen
	}
});

export default createAppContainer(InitialScreenNavigator);
