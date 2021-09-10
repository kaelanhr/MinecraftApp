import { StackScreenProps } from "@react-navigation/stack";
import Button from "Components/Button/Button";
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
			<Avatar username="DarkWolf_V" color={PlayerColors.Blue} />
			<TextInput editable={false} label="Role" value="Administrator" />
			<TextInput editable={false} label="Color" value="Blue" />
			<TextInput label="Username" value="DarkWolf_V" placeholder="Username..." />
			<TextInput
				label="Description"
				value="Some Dude"
				placeholder={"Description..."}
			/>
			<Button
				onPress={() => console.log("update profile")}
				text="Update Profile"
			/>
			<Button onPress={() => navigation.goBack()} text="Back" />
		</ScreenBackground>
	);
}
