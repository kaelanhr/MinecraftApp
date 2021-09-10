import { StackScreenProps } from "@react-navigation/stack";
import { ConfirmDialog } from "Components/Button/ButtonGroup";
import TextArea from "Components/Text/TextArea";
import TextInput from "Components/Text/TextInput";
import { StyledText } from "Components/Themed";
import React from "react";
import { View } from "react-native";
import { RootStackParamList } from "types";
import ScreenBackground from "./ScreenBackground";



export default function AddNewsScreen({
	navigation,
}: StackScreenProps<RootStackParamList, "AddNews">) {
	return (
		<ScreenBackground isCentred={true}>
			<View  style={{width: "80%"}}>
				<StyledText>Add News</StyledText>
				<TextInput placeholder="Title" label="Title" />
				<TextInput placeholder="Priority" label="Priority" />
				<TextArea label="Description" />
				<ConfirmDialog
					onCancel={() => navigation.goBack()}
					onConfirm={() => navigation.goBack()}
				/>
			</View>
		</ScreenBackground>
	);
}
