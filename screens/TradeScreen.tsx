import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "Components/Themed";
import Avatar from "Components/Player/Avatar";
import ScreenBackground from "./ScreenBackground";

export default function TradeScreen() {
	return (
		<ScreenBackground>
			<Avatar username="Eshman" color="green" />
			<Text style={styles.title}>Tab Two</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
		</ScreenBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
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
