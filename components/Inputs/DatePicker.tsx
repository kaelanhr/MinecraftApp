import DefaultDateTimePicker from "@react-native-community/datetimepicker";
import TextInput from "Components/Inputs/TextInput";
import React, { useState } from "react";
import { Platform, View, Text, Pressable } from "react-native";

export default function DatePicker() {
	const [date, setDate] = useState(new Date(1598051730000));
	const [show, setShow] = useState(false);

	const onChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === "ios");
		setDate(currentDate);
	};

	return (
		<>
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
			<Pressable onTouchEnd={() => setShow(true)}>
				<TextInput
					editable={false}
					onPress={() => setShow(true)}
					value={`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
				/>
			</Pressable>
		</>
	);
}
