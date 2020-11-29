import DefaultDateTimePicker from "@react-native-community/datetimepicker";
import { ITextInput } from "Components/Inputs/Text/ITextInput";
import TextInput from "Components/Inputs/Text/TextInput";
import React, { useState } from "react";
import { Platform, View, Text, Pressable } from "react-native";

interface IDatePickerProps {
	title?: string
}

export default function DatePicker(props: IDatePickerProps) {
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
						value={`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
						title={props.title}
					/>
				</Pressable>

		</>
	);
}
