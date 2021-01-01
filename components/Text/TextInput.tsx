import { StyledText } from "Components/Themed";
import React from "react";
import { StyleSheet, TextInput as DefaultTextInput } from "react-native";

interface ITextInput {
	title?: string;
	editable?: boolean;
	placeholder?: string;
	secureText?: boolean;
	value?: string;
	onPress?: Function;
}

export default function TextInput(props: ITextInput) {
	return (
		<>
			{props.title ? <StyledText style={styles.title}>{props.title}</StyledText> : null}
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
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
});
