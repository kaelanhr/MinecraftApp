import { StyledText } from "Components/Themed";
import { Textarea as NativeTextarea } from "native-base";
import React from "react";

interface ITextAreaProps {
	/** the label of the text area. */
	label?: string;
}

/**
 * Component for text area and label.
 * @param props props for a text area.
 */
export default function TextArea(props: ITextAreaProps) {
	return (
		<>
			{props.label && <StyledText>{props.label}</StyledText>}
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
