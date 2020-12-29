import React from "react";
import Avatar from "Components/Player/Avatar";
import Button from "Components/Button";
import TextInput from "Components/Inputs/Text/TextInput";
import { StackScreenProps } from "@react-navigation/stack";
import ScreenBackground from "./ScreenBackground";
import { RootStackParamList } from "types";
import * as Colors from "constants/Colors"

export default function ProfileScreen({ navigation }: StackScreenProps<RootStackParamList, "Profile">) {
	return (
		<ScreenBackground isCentred={true}>
			<Avatar username="Eshman" color={Colors.PlayerColors.green} />
			<TextInput editable={false} title="Role" value="Administrator" />
			<TextInput editable={false} title="Color" value="Green" />
			<TextInput title="Username" value="Eshman" placeholder="Username..." />
			<TextInput
				title="Description"
				value="Some Dude"
				placeholder={"Description..."}
			/>
			<Button onPress={() => console.log("update profile")} buttonText="Update Profile" />
			<Button onPress={() => navigation.goBack()} buttonText="Back" />
		</ScreenBackground>
	);
}
