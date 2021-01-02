import { StackScreenProps } from "@react-navigation/stack";
import Button from "Components/Button";
import Avatar from "Components/Player/Avatar";
import TextInput from "Components/Text/TextInput";
import { PlayerColors } from "constants/Colors";
import React from "react";
import { RootStackParamList } from "types";
import ScreenBackground from "./ScreenBackground";

export default function ProfileScreen({
	navigation,
}: StackScreenProps<RootStackParamList, "Profile">) {
	return (
		<ScreenBackground isCentred={true}>
			<Avatar username="Eshman" color={PlayerColors.green} />
			<TextInput editable={false} title="Role" value="Administrator" />
			<TextInput editable={false} title="Color" value="Green" />
			<TextInput title="Username" value="Eshman" placeholder="Username..." />
			<TextInput
				title="Description"
				value="Some Dude"
				placeholder={"Description..."}
			/>
			<Button
				onPress={() => console.log("update profile")}
				buttonText="Update Profile"
			/>
			<Button onPress={() => navigation.goBack()} buttonText="Back" />
		</ScreenBackground>
	);
}
