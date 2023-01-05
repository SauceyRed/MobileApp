// import * as Progress from 'expo-progress';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './constants/styles';
import TaskView from './components/TaskView';
import ProgressBar from 'expo-progress/build/Bar';
// import { ProgressView } from '@react-native-community/progress-view';

export default function App() {
  return (
	<View style={styles.container}>
		<TaskView name='Task Name' description='Task description.' progressMax={3} />
		{
		/* <Progress.Bar isAnimated = {true} progress = {0.5} />
		<ProgressView progressTintColor="orange" trackTintColor="blue" progress={0.7} />
		*/
		}
		<StatusBar style="auto" />
	</View>
  );
}


