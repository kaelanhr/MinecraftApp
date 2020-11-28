import React from "react";
import { Text } from "Components/Themed";
import TextInput from "Components/Inputs/TextInput";
import TextArea from "Components/Inputs/TextArea";
import DatePicker from "Components/Inputs/DatePicker";
import TimePicker from "Components/Inputs/TimePicker";

export default function NewBattle() {
	return (
		<>
			<TextInput title="Location" />
			<Text>Date</Text>
			<DatePicker />
			<Text>Time</Text>
			<TimePicker />
			<Text>Rules</Text>
			<TextArea />
		</>
	);
}
