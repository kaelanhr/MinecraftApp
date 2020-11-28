import React from "react";
import { StyleSheet, TextInput as DefaultTextInput } from "react-native";
import { Text } from "Components/Themed";

interface IStyledTextInput {
	title?: string;
	editable?: boolean;
	placeholder?: string;
	secureText?: boolean;
	value?: string;
	onPress?: Function;
}

export default function TextInput(props: IStyledTextInput) {
	return (
		<>
			{props.title ? <Text style={styles.title}>{props.title}</Text> : null}
			<DefaultTextInput
				style={
					props.editable == false ? styles.inputDisabled : styles.inputActive
				}
				placeholder={props.placeholder ?? ""}
				placeholderTextColor="#ACACAC"
				editable={props.editable ?? true}
				secureTextEntry={props.secureText ?? false}
				value={props.value}
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
		minWidth: 100,
		width: "80%",
	},
	inputDisabled: {
		color: "#FFFFFF",
		borderColor: "#707070",
		borderWidth: 2,
		backgroundColor: "#303030",
		paddingLeft: 5,
		paddingTop: 2,
		paddingBottom: 2,
		minWidth: 100,
		width: "80%",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
});
