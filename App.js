import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {
	AccountScreen,
	SigninScreen,
	SignupScreen,
	TrackCreateScreen,
	TrackDetailsScreen,
	TrackListScreen,
} from './src/screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainFlow = () => (
	<Tab.Navigator>
		<Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
		<Tab.Screen name="TrackDetails" component={TrackDetailsScreen} />
	</Tab.Navigator>
);

const AppRoutes = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{isLoggedIn ? (
					<Stack.Screen name="Main f2low" component={MainFlow} />
				) : (
					<>
						<Stack.Screen
							name="Signin"
							component={SigninScreen}
							options={{ header: () => false }}
						/>
						<Stack.Screen
							name="Signup"
							component={SignupScreen}
							options={{ header: () => false }}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppRoutes;
