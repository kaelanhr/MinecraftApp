import { ConfirmDialog } from "Components/Button/ButtonGroup";
import DatePicker from "Components/DateTimePicker/DatePicker";
import TimePicker from "Components/DateTimePicker/TimePicker";
import TextArea from "Components/Text/TextArea";
import TextInput from "Components/Text/TextInput";
import React from "react";
import { View } from "react-native";

export default function NewBattle() {
	return (
		<>
			<View style={{ width: "80%" }}>
				<TextInput title="Location" />
				<DatePicker title="Date" />
				<TimePicker title="Time" />
				<TextArea title="Rules" />
				<ConfirmDialog onCancel={() => null} onConfirm={() => null} />
			</View>
		</>
	);
}
