import Button from "Components/Button/Button";
import TextInput from "Components/Text/TextInput";
import { StyledText } from "Components/Themed";
import React from "react";

export default function LoginScreen() {
	return (
		<>
			<StyledText>Login</StyledText>
			<TextInput placeholder="Username" />
			<TextInput placeholder="Password" secureText={true} />
			<Button text="Submit" onPress={() => null} />
		</>
	);
}
