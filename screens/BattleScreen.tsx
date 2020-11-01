import * as React from "react";
import { StyleSheet } from "react-native";
import StyledButton from "../components/StyledButton";
import StyledTextInput from "../components/StyledTextInput";

import { Text, View } from "../components/Themed";

export default function BattleScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab Two</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<StyledTextInput title="Title" />
			<StyledButton onPress={() => null} title="Submit" />
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
