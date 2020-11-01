import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Text } from "../components/Themed";

interface IStyledTextInput {
	title?: string;
	editable?: boolean;
	placeholder?: string;
	secureText?: boolean;
}

export default function StyledTextInput(props: IStyledTextInput) {
	return (
		<>
			{props.title ? <Text style={styles.title}>{props.title}</Text> : null}
			<TextInput
				style={
					props.editable == false ? styles.inputDisabled : styles.inputActive
				}
				placeholder={props.placeholder ?? ""}
				placeholderTextColor="#ACACAC"
				editable={props.editable ?? true}
				secureTextEntry={props.secureText ?? false}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	inputActive: {
		borderColor: "#707070",
		borderWidth: 2,
		backgroundColor: "#D5D5D5",
		paddingLeft: 5,
		paddingTop: 2,
		paddingBottom: 2,
	},
	inputDisabled: {
		color: "#FFFFFF",
		borderColor: "#707070",
		borderWidth: 2,
		backgroundColor: "#303030",
		paddingLeft: 5,
		paddingTop: 2,
		paddingBottom: 2,
	},
	title: {
		color: "black",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
});
