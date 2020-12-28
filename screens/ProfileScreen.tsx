import React from "react";
import Avatar from "Components/Player/Avatar";
import Button from "Components/Button";
import TextInput from "Components/Inputs/Text/TextInput";
import { View } from "Components/Themed";

export default function ProfileScreen() {
	return (
		<View>
			<Avatar />
			<TextInput editable={false} title="Role" value="Administrator" />
			<TextInput editable={false} title="Color" value="Green" />
			<TextInput
				title="Username"
				value="Eshman"
				placeholder="Username..."
			/>
			<TextInput
				title="Description"
				value="Some Dude"
				placeholder={"Description..."}
			/>
			<Button onPress={() => null} buttonText="Update Profile" />
		</View>
	);
}
