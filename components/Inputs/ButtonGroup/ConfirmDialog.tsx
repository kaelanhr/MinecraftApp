import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "../../Themed";

interface IConfirmDialogProps {
	onConfirm: () => void;
	onCancel: () => void;
}

export default function ConfirmDialog(props: IConfirmDialogProps) {
	return (
		<View style={styles.Wrapper}>
			<Pressable onPress={props.onCancel} style={[styles.Cancel, styles.Button]}>
				<Text style={styles.Text}>Cancel</Text>
			</Pressable>
			<Pressable onPress={props.onConfirm} style={[styles.Confirm, styles.Button]}>
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
		margin: 10,
	},
	Confirm: {
		backgroundColor: "green",
	},
	Cancel: {
		backgroundColor: "red",
	},
	Text: {
		color: "white",
	},
});
