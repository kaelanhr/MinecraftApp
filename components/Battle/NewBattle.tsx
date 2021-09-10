import { StackScreenProps } from "@react-navigation/stack";
import { ConfirmDialog } from "Components/Button/ButtonGroup";
import CheckboxGroup from "Components/CheckBox/CheckboxGroup";
import DatePicker from "Components/DateTimePicker/DatePicker";
import TimePicker from "Components/DateTimePicker/TimePicker";
import TextArea from "Components/Text/TextArea";
import TextInput from "Components/Text/TextInput";
import React from "react";
import { View } from "react-native";
import { BattleParamList } from "types";

/**
 * Component for the form to create a new battle.
 */
export default function NewBattle({
	navigation,
}: StackScreenProps<BattleParamList, "BattleScreen">) {
	return (
		<>
			<View style={{ width: "80%" }}>
				<TextInput label="Location" />
				<DatePicker label="Date" />
				<TimePicker label="Time" />
				<TextArea label="Rules" />
				<CheckboxGroup
					list={[
						{ displayValue: "Announce Fight", id: "1", isSelected: false },
					]}
				/>
				<ConfirmDialog
					onCancel={() => navigation.goBack()}
					onConfirm={() => navigation.goBack()}
				/>
			</View>
		</>
	);
}
