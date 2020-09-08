import { StyleSheet, Dimensions } from 'react-native';

const ScreenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
	container: {
		height: ScreenHeight,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 200,
	},
});
