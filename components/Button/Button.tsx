import ConfirmIcon from "assets/images/Confirm.svg";
import CancelIcon from "assets/images/Cancel.svg";
import PlusIcon from "assets/images/Plus.svg";
import CogIcon from "assets/images/COG.svg";
import { ButtonSize } from "constants/Layout";
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { StyledText } from "Components/Themed";

/**
 * Wrapper component to create pressable confirm button
 * @param props pressable props for confirm button.
 */
export function Confirm(props: PressableProps) {
	return (
		<Pressable {...props}>
			<ConfirmIcon height={ButtonSize} width={ButtonSize} />
		</Pressable>
	);
}

/**
 * Wrapper component to create pressable cancel button
 * @param props pressable props for cancel button.
 */
export function Cancel(props: PressableProps) {
	return (
		<Pressable {...props}>
			<CancelIcon height={ButtonSize} width={ButtonSize} />
		</Pressable>
	);
}

/**
 * Wrapper component to create pressable plus button
 * @param props pressable props for plus button.
 */
export function Plus(props: PressableProps) {
	return (
		<Pressable {...props}>
			<PlusIcon height={ButtonSize} width={ButtonSize} />
		</Pressable>
	);
}

/**
 * Wrapper component to create pressable cog button.
 * @param props pressable props for cog button.
 */
export function Cog(props: PressableProps) {
	return (
		<Pressable {...props}>
			<CogIcon height={ButtonSize} width={ButtonSize} />
		</Pressable>
	);
}

export default function Button(props: PressableProps & { text: string }) {
	return (
		<Pressable {...props} style={styles.Button}>
			<StyledText style={styles.ButtonText}>{props.text}</StyledText>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	Button: {
		borderRadius: 5,
		backgroundColor: "#06D136",
		borderColor: "black",
		borderWidth: 1.5,
	},
	ButtonText: { padding: 6, color: "white" },
});
