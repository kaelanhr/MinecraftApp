import React from 'react'
import {Textarea as NativeTextarea} from "native-base";

export default function TextArea() {
	return (
		<NativeTextarea
			rowSpan={5}
			bordered
			placeholder="Textarea"
			underline
			style={{ backgroundColor: "#D5D5D5", width: "80%" }}
		/>
	);
}
