import { StyleSheet, Dimensions } from 'react-native';
const ScreenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
	container: {
		height: ScreenHeight,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	userContent: {
		marginBottom: 200,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoutBtn: {
		width: 200,
		marginTop: 100,
	},
});
