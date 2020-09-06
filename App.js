import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Login from './src/screens/login';
import Home from './src/screens/home';

const { Navigator, Screen } = createStackNavigator();

const App = () => (
	<NavigationContainer>
		<Navigator>
			<Screen name="Login" component={Login} options={{ title: 'Login' }} />
			<Screen name="Home" component={Home} options={{ title: 'Home' }} />
		</Navigator>
	</NavigationContainer>
);

export default App;
