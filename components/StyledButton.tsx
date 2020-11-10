import { View } from "native-base";
import React from "react";
import { Button, Pressable, StyleSheet } from "react-native";
import { Text, TextProps } from "./Themed";

interface IStyledButtonProps {
	onPress: () => void;
	buttonText: string;
}

export default function StyledButton(props: IStyledButtonProps) {
	return (
		<Pressable onPress={() => {}} style={styles.Button}>
			<Text style={styles.ButtonText}>{props.buttonText}</Text>
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
