import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "../../Themed";

export default function ConfirmDialog() {
	return (
		<View style={styles.Wrapper}>
			<Pressable onPress={() => null} style={[styles.Cancel, styles.Button]}>
				<Text style={styles.Text}>Cancel</Text>
			</Pressable>
			<Pressable onPress={() => null} style={[styles.Confirm, styles.Button]}>
				<Text style={styles.Text}>Confirm</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	Wrapper: {
		flexDirection: "row",
		padding: 10,
	},
	Button: {
		padding: 5,
		margin: 10
	},
	Confirm: {
		backgroundColor: "green",
	},
	Cancel: {
		backgroundColor: "red",
	},
	Text: {
		color: "white"
	}
});
