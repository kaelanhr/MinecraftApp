import * as React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../Components/Themed";
import ScreenBackground from "./ScreenBackground";

export default function ProjectScreen() {
	return (
		<ScreenBackground>
			<Text style={styles.title}>Project</Text>
		</ScreenBackground>
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
