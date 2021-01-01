import { ConfirmDialog } from "Components/Button/ButtonGroup";
import RadioItemGroup from "Components/Radio/RadioItemGroup";
import React from "react";
import { View } from "react-native";

export default function SelectPlayer() {
	const players = [
		{ id: "Kaelan", displayValue: "Kaelan" },
		{ id: "Eshman", displayValue: "Eshman" },
		{ id: "Thomas", displayValue: "Thomas" },
	];

	return (
		<View>
			<RadioItemGroup list={players} />
			<ConfirmDialog onCancel={() => null} onConfirm={() => null} />
		</View>
	);
}
