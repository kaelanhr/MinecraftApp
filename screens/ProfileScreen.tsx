import React, { Props } from "react";
import Avatar from "Components/Player/Avatar";
import Button from "Components/Button";
import TextInput from "Components/Inputs/Text/TextInput";
import { View } from "Components/Themed";
import { StackScreenProps } from "@react-navigation/stack";
import { Pressable } from "react-native";
import ScreenBackground from "./ScreenBackground";

export default function ProfileScreen({ navigation }: any) {
	return (
		<ScreenBackground>
			<Avatar />
			<TextInput editable={false} title="Role" value="Administrator" />
			<TextInput editable={false} title="Color" value="Green" />
			<TextInput title="Username" value="Eshman" placeholder="Username..." />
			<TextInput
				title="Description"
				value="Some Dude"
				placeholder={"Description..."}
			/>
			<Button onPress={() => console.log("uhoh")} buttonText="Update Profile" />
			<Button onPress={() => navigation.goBack()} buttonText="Back" />
		</ScreenBackground>
	);
}
