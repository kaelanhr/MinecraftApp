import * as Colors from "constants/Colors";
import * as React from "react";
import { Text as DefaultText } from "react-native";

export type TextProps = DefaultText["props"];

export function StyledText(props: TextProps) {
	const { style, ...otherProps } = props;

	return <DefaultText style={{ color: Colors.White }} {...otherProps} />;
}
