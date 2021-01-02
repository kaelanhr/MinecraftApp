import { StyledText } from "Components/Themed";
import React from "react";
import { StyleSheet, TextInput as DefaultTextInput } from "react-native";
import { ITextInput } from "./ITextInput";

/**
 * Component for all text input fields.
 * @param props props for a text input field.
 */
export default function TextInput(props: ITextInput) {
	return (
		<>
			{props.label && (
				<StyledText style={styles.title}>{props.label}</StyledText>
			)}
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
