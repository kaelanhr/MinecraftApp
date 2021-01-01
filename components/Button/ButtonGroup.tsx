import { StyledText } from "Components/Themed";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import CancelIcon from "assets/images/Cancel.svg";
import { ButtonSize } from "constants/Layout";
import Cog from "assets/images/COG.svg";
import { Cancel, Confirm } from "./Button";

interface IConfirmDialogProps {
	/** Callback function for when confirm is pressed */
	onConfirm: () => void;
	/** Callback function for when cancel is pressed */
	onCancel: () => void;
}

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
