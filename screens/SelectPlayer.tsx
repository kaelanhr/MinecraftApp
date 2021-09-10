import { StackScreenProps } from "@react-navigation/stack";
import { ConfirmDialog } from "Components/Button/ButtonGroup";
import RadioItemGroup from "Components/RadioButton/RadioButtonGroup";
import React from "react";
import { View } from "react-native";
import { BattleParamList, RootStackParamList } from "types";

export default function SelectPlayer({
	navigation,
}: StackScreenProps<BattleParamList, "BattleScreen">) {
	const players = [
		{ id: "Kaelan", displayValue: "Kaelan" },
		{ id: "Eshman", displayValue: "Eshman" },
		{ id: "Thomas", displayValue: "Thomas" },
	];

	return (
		<View>
			<RadioItemGroup list={players} />
			<ConfirmDialog
				onCancel={() => navigation.goBack()}
				onConfirm={() => navigation.navigate("VersusScreen")}
			/>
		</View>
	);
}
