import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "Components/Themed";

export default function ScreenBackground(props: { children: React.ReactNode }) {
	return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#141414",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
