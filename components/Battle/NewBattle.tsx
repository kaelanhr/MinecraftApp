import { Textarea } from "native-base";
import React from "react";
import StyledTextInput from "Components/StyledTextInput";
import { Text } from "Components/Themed";

export default function NewBattle() {

	return (
		<>
			<StyledTextInput title="Location" />
			<Text>Time</Text>

			<Text>Rules</Text>
			<Textarea rowSpan={5} bordered placeholder="Textarea" underline />
		</>
	);
}
