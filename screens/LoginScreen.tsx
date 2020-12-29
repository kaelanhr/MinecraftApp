import React from "react";
import Button from "Components/Button";
import TextInput from "Components/Inputs/Text/TextInput";
import { Text } from "Components/Themed";

export default function LoginScreen() {
	return (
		<>
			<Text>Login</Text>
			<TextInput placeholder="Username" />
			<TextInput placeholder="Password" secureText={true} />
			<Button buttonText="Submit" onPress={() => null} />
		</>
	);
}
