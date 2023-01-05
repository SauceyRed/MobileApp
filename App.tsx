// import * as Progress from 'expo-progress';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './constants/styles';
import TaskView from './components/TaskView';
import ProgressBar from 'expo-progress/build/Bar';
// import { ProgressView } from '@react-native-community/progress-view';
import FullStar from './assets/full_star.svg';

export default function App() {
  return (
	<View style={styles.container}>
		<TaskView name='Task Name' description='Task description.' progressMax={3} />
		{
		/* <Progress.Bar isAnimated = {true} progress = {0.5} />
		<ProgressView progressTintColor="orange" trackTintColor="blue" progress={0.7} />
		*/
		}
		<FullStar style={{borderColor: 'orange', borderRadius: 1, borderWidth: 1}} />
		<StatusBar style="auto" />
	</View>
  );
}


