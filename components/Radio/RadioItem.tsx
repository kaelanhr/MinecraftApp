import { StyledText } from "Components/Themed";
import * as Colors from "constants/Colors";
import { Radio } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import { IRadioItemGroup } from "./RadioItemType";

export default function RadioItem(props: IRadioItemGroup) {
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
