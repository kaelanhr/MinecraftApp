import { CheckBox } from "native-base";
import React from "react";
import { Text, View } from "../../Themed";
import { ICheckboxItemProps } from "./CheckboxItemType";


export default function CheckboxItem(props: ICheckboxItemProps) {
	return (
		<View onTouchEnd={props.onSelected}>
			<CheckBox />
			<Text>{props.value}</Text>
		</View>
	);
}
