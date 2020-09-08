import React, { useContext } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Context
import { AuthContext } from '../context/authContext';

// Screens
import { LoginScreen, HomeScreen } from '../screens';

// Components
import { Loader } from '../components';

const Stack = createStackNavigator();

const AppRoutes = () => {
	const [auth] = useContext(AuthContext);

	return (
		<NavigationContainer>
			{auth?.isLoading && <Loader />}
			{!auth?.isLoading && (
				<Stack.Navigator>
					{auth?.isLoggedIn ? (
						<Stack.Screen name="Home" component={HomeScreen} />
					) : (
						<Stack.Screen
							name="Login"
							component={LoginScreen}
							options={{ header: () => false }}
						/>
					)}
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
};

export default AppRoutes;
