import { CheckBox } from "native-base";
import React from "react";
import { Text, View } from "Components/Themed";
import { ICheckboxItemGroup } from "./CheckboxItemType";

export default function CheckboxItem(props: ICheckboxItemGroup) {
	return (
		<View onTouchEnd={props.onSelected}>
			<CheckBox checked={props.isSelected} />
			<Text>{props.displayValue}</Text>
			<Text>{props.id}</Text>
		</View>
	);
}
