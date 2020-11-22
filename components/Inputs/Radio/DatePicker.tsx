import DefaultDateTimePicker from "@react-native-community/datetimepicker";
import TextInput from "Components/Inputs/TextInput";
import React, { useState } from "react";
import { Platform, View } from "react-native";

export default function DatePicker() {
	const [date, setDate] = useState(new Date(1598051730000));
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);

	const onChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === "ios");
		setDate(currentDate);
	};

	const showMode = (currentMode: "date" | "time") => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode("date");
	};

	const showTimepicker = () => {
		showMode("time");
	};
	return (
		<>
			<View>
				{show && (
					<DefaultDateTimePicker
						testID="dateTimePicker"
						value={date}
						mode={"date"}
						is24Hour={true}
						display="default"
						onChange={onChange}
					/>
				)}
			</View>
			<TextInput
				editable={false}
				onPress={showDatepicker}
				value={date.toString()}
			/>
		</>
	);
}
