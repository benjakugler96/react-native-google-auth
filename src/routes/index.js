import React, { useContext } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Tab Icons
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import {
	SigninScreen,
	SignupScreen,
	SettingsScreen,
	HomeScreen,
} from '../screens';

// Context
import { AuthContext } from '../context/authContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainFlow = () => (
	<Tab.Navigator>
		<Tab.Screen
			name="Home"
			component={HomeScreen}
			options={{
				tabBarLabel: 'Home',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="ios-home" color={tintColor} size={25} />
				),
			}}
		/>
		<Tab.Screen
			name="Settings"
			component={SettingsScreen}
			options={{
				tabBarLabel: 'Home',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="ios-settings" color={tintColor} size={25} />
				),
			}}
		/>
	</Tab.Navigator>
);

const AppRoutes = () => {
	const [auth] = useContext(AuthContext);
	console.log(auth);
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{auth?.isLoggedIn ? (
					<Stack.Screen name="Main flow" component={MainFlow} />
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
