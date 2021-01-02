import React from "react";
import { StyleSheet, View } from "react-native";
import { Cancel, Confirm } from "./Button";

interface IConfirmDialogProps {
	/** Callback function for when confirm is pressed */
	onConfirm: () => void;
	/** Callback function for when cancel is pressed */
	onCancel: () => void;
}

/**
 * Component which wraps and styles cancel and confirm buttons together.
 * @param props dialog function props.
 */
export function ConfirmDialog(props: IConfirmDialogProps) {
	return (
		<View style={styles.Wrapper}>
			<Cancel onPress={props.onCancel} />
			<Confirm onPress={props.onConfirm} />
		</View>
	);
}

const styles = StyleSheet.create({
	Wrapper: {
		flexDirection: "row",
		padding: 10,
		marginTop: 10,
		justifyContent: "space-evenly",
	},
});
