import React from "react";
import { Text } from "Components/Themed";
import TextInput from "Components/Inputs/Text/TextInput";
import TextArea from "Components/Inputs/Text/TextArea";
import DatePicker from "Components/Inputs/DateTimePicker/DatePicker";
import TimePicker from "Components/Inputs/DateTimePicker/TimePicker";
import { View } from "react-native";
import ConfirmDialog from "Components/Inputs/ButtonGroup/ConfirmDialog";

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
