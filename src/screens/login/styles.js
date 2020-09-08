import { StyleSheet, Dimensions } from 'react-native';

let ScreenHeight = Dimensions.get('window').height;

const lightGray = '#b3b1ad';

export const styles = StyleSheet.create({
	container: {
		padding: 10,
		height: ScreenHeight - 50,
		justifyContent: 'center',
	},
	header: {
		marginBottom: 50,
		textAlign: 'center',
	},
	inputStyle: {
		borderWidth: 1,
		borderColor: lightGray,
		borderRadius: 4,
	},
	inputContainerStyle: { borderBottomWidth: 0 },
	separatorContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		padding: 30,
	},
	separatorLine: {
		height: 1,
		backgroundColor: lightGray,
		width: '40%',
	},
	separatorText: {
		color: lightGray,
		textTransform: 'uppercase',
		fontSize: 20,
		padding: 20,
	},
	socialIconContainer: {
		borderRadius: 4,
	},
});
