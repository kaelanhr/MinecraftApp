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
	/** whether the radio item has been selected. */
	isSelected: boolean;
}

export interface IRadioButtonExtension {
	/** radio buttons selected callback function. */
	onSelected: () => void;
}

/**
 * Component for a radio item.
 * @param props props for a single radio item.
 */
export default function RadioItem(props: IRadioButton & IRadioButtonExtension) {
	return (
		<View style={styles.radioItem} onTouchEnd={props.onSelected}>
			<Radio
				color={Colors.Grey}
				selectedColor={Colors.Green}
				selected={props.isSelected}
				style={{ marginTop: 10 }}
			/>
			<View style={{  marginTop: 10, marginLeft: 20 }}>
				<StyledText>{props.displayValue}</StyledText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	radioItem: {
		flexDirection: "row",
	},
});
