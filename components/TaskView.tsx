import React, { useState } from "react";
import { Text, View } from "react-native";
import { Svg } from "react-native-svg";
import { styles } from '../constants/styles';
import FullStar from '../assets/full_star.svg';
import EmptyStar from '../assets/empty_star.svg';

type TaskViewProps = {
    name?: string;
    description?: string;
    /**
     * @default 0
     */
    difficutly?: number;
    /**
     * @default 0
     */
    progress?: number;
    progressMax: number;
}

/*
interface TaskViewProps {
    name: string
    description: string
    difficulty?: number
    progress: number
    progressMax: number
}
*/

export default function TaskView(props: TaskViewProps) {
    const progress = useState(true);
    return(
        <View style={styles.task_container}>
            <View style={styles.task_name}>
                <Text style={styles.task_text}>{props.name}</Text>
            </View>
            <View style={styles.task_difficulty}>
				<FullStar style={styles.difficulty_star} width="20%" height="50%" />
				<EmptyStar style={styles.difficulty_star} width="20%" height="50%" />
                <EmptyStar style={styles.difficulty_star} width="20%" height="50%" />
            </View>
        </View>
    );
}

/*
export default class TaskView extends React.Component {
    constructor(props: Props) {
        super(props);
    }
	render() {
        return(
            <View style={styles.task_container}>
                <Text style={styles.task_text}>{this.props.name}</Text>
            </View>
        );
    }
}
*/