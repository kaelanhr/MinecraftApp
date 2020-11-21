import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../Components/Themed";

export default function ProjectScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Project</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
