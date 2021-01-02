import { StyledText } from "Components/Themed";
import { CheckBox } from "native-base";
import React from "react";
import { View } from "react-native";

export interface ICheckboxProps {
	/** The text displayed to the end user for this checkbox item. */
	displayValue: string;
	/** The unique id of this checkbox item. */
	id: string;
	/** function call back for when this item is selected. */
	onSelected: () => void;
	/** set whether the item is selected or not. */
	isSelected: boolean;
}

/**
 * Component for a single checkbox item.
 * @param props checkbox props for a single item.
 */
export default function Checkbox(props: ICheckboxProps) {
	return (
		<View onTouchEnd={props.onSelected}>
			<CheckBox checked={props.isSelected} />
			<StyledText>{props.displayValue}</StyledText>
			<StyledText>{props.id}</StyledText>
		</View>
	);
}
