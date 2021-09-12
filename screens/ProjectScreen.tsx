import * as React from "react";
import { StyleSheet } from "react-native";
import { StyledText } from "../Components/Themed";
import ScreenBackground from "./ScreenBackground";

export default function ProjectScreen() {
	return (
		<ScreenBackground>
			<StyledText style={styles.title}>Project</StyledText>
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
});
