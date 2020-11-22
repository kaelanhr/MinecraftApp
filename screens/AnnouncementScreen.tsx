import { Textarea } from "native-base";
import React from "react";
import ConfirmDialog from "Components/Inputs/ButtonGroup/ConfirmDialog";
import TextInput from "Components/Inputs/TextInput";
import { View, Text } from "Components/Themed";

export default function Announcement() {
	return (
		<View>
			<Text>Announcement</Text>
			<TextInput placeholder="Title" title="Title" />
			<TextInput placeholder="Priority" title="Priority" />
			<Textarea rowSpan={5} bordered placeholder="Description" underline />
			<ConfirmDialog onCancel={() => null} onConfirm={() => null} />
		</View>
	);
}
