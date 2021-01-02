import { ConfirmDialog } from "Components/Button/ButtonGroup";
import TextInput from "Components/Text/TextInput";
import { StyledText } from "Components/Themed";
import { Textarea } from "native-base";
import React from "react";
import { View } from "react-native";

export default function Announcement() {
	return (
		<View>
			<StyledText>Announcement</StyledText>
			<TextInput placeholder="Title" label="Title" />
			<TextInput placeholder="Priority" label="Priority" />
			<Textarea rowSpan={5} bordered placeholder="Description" underline />
			<ConfirmDialog onCancel={() => null} onConfirm={() => null} />
		</View>
	);
}
