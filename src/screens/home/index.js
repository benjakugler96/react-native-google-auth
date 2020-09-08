import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, Image, Button } from 'react-native-elements';
import { AuthContext } from '../../context/authContext';
import { styles } from './styles';

const Home = () => {
	const [auth, setAuth] = useContext(AuthContext);

	const onLogout = () => {
		setAuth({
			isLoggedIn: false,
			user: null,
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.userContent}>
				<Image
					source={{ uri: auth.user?.photoUrl }}
					style={{ width: 100, height: 100, borderRadius: 50 }}
					PlaceholderContent={<ActivityIndicator />}
				/>
				<Text h4>{auth.user?.givenName}</Text>
				<Text h5>{auth.user?.email}</Text>
				<Text h6>{auth.user?.id}</Text>
				<Button title="Logout" style={styles.logoutBtn} onPress={onLogout} />
			</View>
		</View>
	);
};

export default Home;
