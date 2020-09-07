import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import { styles } from './styles';
import { Message } from '../../components';

const SignupScreen = () => {
	const navigation = useNavigation();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isFormComplete, setIsFormComplete] = useState(true);

	const onSignup = () => {
		if (!email || !password) {
			return setIsFormComplete(false);
		}
	};

	const onNavigate = () => {
		setEmail('');
		setPassword('');
		setIsFormComplete(true);
		navigation.navigate('Signin');
	};

	return (
		<View style={styles.container}>
			<Text h3 style={styles.header}>
				Signup for Tracker
			</Text>
			<Input
				autoCapitalize="none"
				autoCorrect={false}
				label="Email"
				onChangeText={setEmail}
				value={email}
			/>
			<Input
				autoCapitalize="none"
				autoCorrect={false}
				label="Password"
				onChangeText={setPassword}
				value={password}
				secureTextEntry
			/>
			<Button title="Signin" onPress={onSignup} />
			<Button
				title="Already have an account? Signin instead."
				type="clear"
				onPress={onNavigate}
			/>
			{!isFormComplete && (
				<Message
					text="Please enter a valid email and password."
					type="danger"
				/>
			)}
		</View>
	);
};

export default SignupScreen;
