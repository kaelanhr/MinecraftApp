import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "Components/Themed";
import Cancel from "Components/Icons/Cancel";
import Accept from "Components/Icons/Accept";

interface IConfirmDialogProps {
	onConfirm: () => void;
	onCancel: () => void;
}

export default function ConfirmDialog(props: IConfirmDialogProps) {
	return (
		<View style={styles.Wrapper}>
			<Pressable onPress={props.onCancel}>
				<Cancel />
			</Pressable>
			<Pressable onPress={props.onConfirm}>
				<Accept />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	Wrapper: {
		flexDirection: "row",
		padding: 10,
	},
});
