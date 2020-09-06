import React from 'react';
import { View, Button } from 'react-native';

const Home = ({ navigation }) => {
	return (
		<View>
			<Button
				title="Go to Login"
				onPress={() => navigation.navigate('Login')}
			/>
		</View>
	);
};
export default Home;
