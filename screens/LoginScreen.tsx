import React from "react";
import StyledButton from "Components/StyledButton";
import StyledTextInput from "Components/StyledTextInput";
import { Text } from "Components/Themed";

export default function LoginScreen() {
	return (
		<>
			<Text>Login</Text>
			<StyledTextInput placeholder="Username" />
			<StyledTextInput placeholder="Password" secureText={true} />
			<StyledButton buttonText="Submit" onPress={() => null} />
		</>
	);
}
