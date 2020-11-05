import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, View } from "react-native";
import StyledTextInput from "../../StyledTextInput";

export default function StyledDatePicker() {
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
					<DateTimePicker
						testID="dateTimePicker"
						value={date}
						mode={"date"}
						is24Hour={true}
						display="default"
						onChange={onChange}
					/>
				)}
			</View>
			<StyledTextInput
				editable={false}
				onPress={showDatepicker}
				value={date.toString()}
			/>
		</>
	);
}
