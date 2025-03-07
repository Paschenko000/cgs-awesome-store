import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '~/shared/styles';
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.bgBlue,
		paddingTop: 20,
		paddingHorizontal: 16,
	},
	noFound: {
		marginTop: 100,
		textAlign: 'center',
		fontSize: 18,
		fontFamily: FONTS.poppins.regular,
		color: COLORS.text,
	},
});
