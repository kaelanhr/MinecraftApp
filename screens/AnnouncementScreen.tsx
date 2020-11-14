import { Textarea } from "native-base";
import React from "react";
import ConfirmDialog from "Components/Inputs/ButtonGroup/ConfirmDialog";
import StyledTextInput from "Components/StyledTextInput";
import { View, Text } from "Components/Themed";

export default function Announcement() {
	return (
		<View>
			<Text>Announcement</Text>
			<StyledTextInput placeholder="Title" title="Title" />
			<StyledTextInput placeholder="Priority" title="Priority" />
			<Textarea rowSpan={5} bordered placeholder="Description" underline />
			<ConfirmDialog onCancel={() => null} onConfirm={() => null} />
		</View>
	);
}
