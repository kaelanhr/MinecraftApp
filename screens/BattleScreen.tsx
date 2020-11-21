import * as React from "react";
import { StyleSheet } from "react-native";
import NewBattle from "Components/Battle/NewBattle";
import { Text,View } from "Components/Themed";

export default function BattleScreen() {
	return (
		<>
			<View style={styles.container}>
				<NewBattle />
			</View>
		</>
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
