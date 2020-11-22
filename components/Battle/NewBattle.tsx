import { Textarea } from "native-base";
import React from "react";
import { Text } from "Components/Themed";
import TextInput from "Components/Inputs/TextInput";

export default function NewBattle() {

	return (
		<>
			<TextInput title="Location" />
			<Text>Time</Text>

			<Text>Rules</Text>
			<Textarea rowSpan={5} bordered placeholder="Textarea" underline />
		</>
	);
}
