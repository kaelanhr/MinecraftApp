import DefaultDateTimePicker from "@react-native-community/datetimepicker";
import TextInput from "Components/Text/TextInput";
import React, { useState } from "react";
import { Platform, Pressable, View } from "react-native";

interface ITimePickerProps {
	/** The label to show above the timerpicker input field. */
	label?: string;
}

export default function TimePicker(props: ITimePickerProps) {
	const [date, setDate] = useState(new Date(1598051730000));
	const [show, setShow] = useState(false);

	const onChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === "ios");
		setDate(currentDate);
	};

	return (
		<>
			<View>
				{show && (
					<DefaultDateTimePicker
						testID="dateTimePicker"
						value={date}
						mode={"time"}
						is24Hour={true}
						display="default"
						onChange={onChange}
					/>
				)}
			</View>
			<Pressable onTouchEnd={() => setShow(true)}>
				<TextInput
					editable={false}
					onPress={() => setShow(true)}
					value={`${date.getHours()}:${date.getMinutes()}:00`}
					title={props.label}
				/>
			</Pressable>
		</>
	);
}
