import { StyledText } from "Components/Themed";
import { Textarea as NativeTextarea } from "native-base";
import React from "react";

interface ITextAreaProps {
	title?: string;
}

export default function TextArea(props: ITextAreaProps) {
	return (
		<>
			<StyledText>{props.title}</StyledText>
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
