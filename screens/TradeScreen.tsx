import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "Components/Themed";
import Avatar from "Components/Player/Avatar";
import ScreenBackground from "./ScreenBackground";
import * as Colors from "constants/Colors";

export default function TradeScreen() {
	return (
		<ScreenBackground>
			<Avatar username="Eshman" color={Colors.PlayerColors.green} />
			<View style={styles.separator} />
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
