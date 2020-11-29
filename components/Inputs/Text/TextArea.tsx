import React from "react";
import { Textarea as NativeTextarea } from "native-base";
import { Text } from "Components/Themed";
import { View } from "react-native";

interface ITextAreaProps {
	title?: string;
}

export default function TextArea(props: ITextAreaProps) {
	return (
		<>
			<Text>{props.title}</Text>
			<NativeTextarea
				rowSpan={5}
				bordered
				placeholder="Textarea"
				underline
				style={{ backgroundColor: "#D5D5D5" }}
			/>
		</>
	);
}
