import { Radio } from "native-base";
import React from "react";
import { Text, View } from "Components/Themed";
import { StyleSheet } from "react-native";
import { IRadioItemGroup } from "./RadioItemType";

export default function RadioItem(props: IRadioItemGroup) {
	return (
		<View style={styles.radioItem} onTouchEnd={props.onSelected}>
			<Text>{props.displayValue}</Text>
			<Radio
				color="#D5D5D5"
				selectedColor="#06D136"
				selected={props.isSelected}
				style={{ marginLeft: 30 }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	radioItem: {
		flex: 1,
		flexDirection: "row",
	},
});
