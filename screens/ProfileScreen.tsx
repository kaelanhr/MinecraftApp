import React from "react";
import Avatar from "Components/Player/Avatar";
import StyledButton from "Components/StyledButton";
import StyledTextInput from "Components/StyledTextInput";
import { View } from "Components/Themed";

export default function ProfileScreen() {
	return (
		<View>
			<Avatar />
			<StyledTextInput editable={false} title="Role" value="Administrator" />
			<StyledTextInput editable={false} title="Color" value="Green" />
			<StyledTextInput
				title="Username"
				value="Eshman"
				placeholder="Username..."
			/>
			<StyledTextInput
				title="Description"
				value="Some Dude"
				placeholder={"Description..."}
			/>
			<StyledButton onPress={() => null} buttonText="Update Profile" />
		</View>
	);
}
