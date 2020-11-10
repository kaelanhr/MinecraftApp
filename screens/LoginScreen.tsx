import React from "react";
import StyledButton from "../components/StyledButton";
import StyledTextInput from "../components/StyledTextInput";
import { Text } from "../components/Themed";

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
