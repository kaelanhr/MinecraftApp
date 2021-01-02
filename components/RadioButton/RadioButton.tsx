import { StyledText } from "Components/Themed";
import { Colors } from "constants/Colors";
import { Radio } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";

export interface IRadioButton {
	/** the text displayed to the end user for this radio button. */
	displayValue: string;
	/** the radio buttons unique id. */
	id: string;
}

export interface IRadioButtonExtension {
	/** radio buttons selected callback function. */
	onSelected: () => void;
	/** whether the radio item has been selected. */
	isSelected: boolean;
}

/**
 * Component for a radio item.
 * @param props props for a single radio item.
 */
export default function RadioItem(props: IRadioButton & IRadioButtonExtension) {
	return (
		<View style={styles.radioItem} onTouchEnd={props.onSelected}>
			<View style={{ width: 60, marginTop: 10 }}>
				<StyledText>{props.displayValue}</StyledText>
			</View>
			<Radio
				color={Colors.Grey}
				selectedColor={Colors.Green}
				selected={props.isSelected}
				style={{ marginLeft: 40, marginTop: 10 }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	radioItem: {
		flexDirection: "row",
	},
});
