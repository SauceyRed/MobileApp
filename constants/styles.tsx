import { StyleSheet } from 'react-native';

    export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111',
		alignItems: 'center',
        paddingTop: '10%'
	},
	task_text: {
		color: 'white',
		textAlign: 'center'
	},
	task_container: {
		borderColor: 'white',
		borderRadius: 1,
		borderWidth: 1,
		height: '25%',
		width: '80%',
		flexDirection: 'row'
	},
    task_name: {
        borderColor: 'orange',
		borderRadius: 1,
		borderWidth: 1,
        width: '50%',
		height: '30%',
        padding: '5%',
    },
    task_difficulty: {
        borderColor: 'yellow',
		borderRadius: 1,
		borderWidth: 1,
        width: '50%',
		height: '30%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
    },
	difficulty_star: {
		borderColor: 'orange',
		borderRadius: 1,
		borderWidth: 1
	}
});
