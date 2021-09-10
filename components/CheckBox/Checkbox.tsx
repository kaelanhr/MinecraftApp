import { StyledText } from "Components/Themed";
import { Colors } from "constants/Colors";
import { CheckBox } from "native-base";
import React from "react";
import { View, StyleSheet } from "react-native";

export interface ICheckboxAttributes {
	/** The text displayed to the end user for this checkbox item. */
	displayValue: string;
	/** The unique id of this checkbox item. */
	id: string;
	/** set whether the item is selected or not. */
	isSelected: boolean;
}

export interface ICheckboxExtensions {
	/** function call back for when this item is selected. */
	onSelected: () => void;
}

/**
 * Component for a single checkbox item.
 * @param props checkbox props for a single item.
 */
export default function Checkbox(
	props: ICheckboxAttributes & ICheckboxExtensions
) {
	return (
		<View onTouchEnd={props.onSelected} style={styles.checkboxItem}>
			<CheckBox checked={props.isSelected} color={Colors.Green} />
			<StyledText>{props.displayValue}</StyledText>
		</View>
	);
}

const styles = StyleSheet.create({
	checkboxItem: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});
