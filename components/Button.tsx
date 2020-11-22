import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "./Themed";

interface IStyledButtonProps {
	onPress: () => void;
	buttonText: string;
}

export default function Button(props: IStyledButtonProps) {
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
