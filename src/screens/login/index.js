import React, { useState, useContext, useEffect } from 'react';
import * as Google from 'expo-google-app-auth';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Text, Button, SocialIcon, Input } from 'react-native-elements';

import { AuthContext } from '../../context/authContext';

import { styles } from './styles';
import Separator from './separator';

const IOS_CLIENT_ID =
	'888706645135-cvrr9g3vtfhjpous2e33vbpiu5kck9so.apps.googleusercontent.com';

const SigninScreen = () => {
	const navigation = useNavigation();

	const [_, setAuth] = useContext(AuthContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		// initAsync();
	}, []);

	const loginWithGoogle = async () => {
		try {
			const result = await Google.logInAsync({
				iosClientId: IOS_CLIENT_ID,
				behavior: ['profile', 'email'],
				success: ['profile', 'email'],
			});
			console.log('hola result', result);
			if (result.type === 'success') {
				setAuth({
					isLoggedIn: true,
					user: result.user,
				});
			} else {
				return { cancelled: true };
			}
		} catch (error) {
			console.log('hola error', error);
			return { error: true };
		}
	};

	return (
		<View style={styles.container}>
			<Text h3 style={styles.header}>
				App Logo?
			</Text>
			<Input
				inputContainerStyle={styles.inputContainerStyle}
				autoCapitalize="none"
				autoCorrect={false}
				label="Email"
				onChangeText={setEmail}
				value={email}
				inputStyle={styles.inputStyle}
			/>
			<Input
				inputContainerStyle={styles.inputContainerStyle}
				label="Password"
				onChangeText={setPassword}
				value={password}
				secureTextEntry
				inputStyle={styles.inputStyle}
			/>
			<Button title="Signin" />
			<Separator />
			<SocialIcon
				type="google"
				title="Login with Google"
				button
				style={styles.socialIconContainer}
				onPress={loginWithGoogle}
			/>
			<SocialIcon
				type="facebook"
				title="Login with Facebook"
				button
				style={styles.socialIconContainer}
			/>
		</View>
	);
};

export default SigninScreen;
