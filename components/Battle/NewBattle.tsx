import DateTimePicker from "@react-native-community/datetimepicker";
import { Textarea } from "native-base";
import React from "react";
import { useState } from "react";
import { Button, Platform, View } from "react-native";
import StyledTextInput from "../StyledTextInput";
import { Text } from "../Themed";

export default function NewBattle() {
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
			<StyledTextInput title="Location" />
			<Text>Time</Text>
			<View>
				<View>
					<Button onPress={showDatepicker} title="Show date picker!" />
				</View>
				<View>
					<Button onPress={showTimepicker} title="Show time picker!" />
				</View>
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
			<Text>{date.toString()}</Text>
			<Text>Rules</Text>
			<Textarea rowSpan={5} bordered placeholder="Textarea" underline />
		</>
	);
}
