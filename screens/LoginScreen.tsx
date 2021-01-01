import Button from "Components/Button";
import TextInput from "Components/Text/TextInput";
import { StyledText } from "Components/Themed";

export default function LoginScreen() {
	return (
		<>
			<StyledText>Login</StyledText>
			<TextInput placeholder="Username" />
			<TextInput placeholder="Password" secureText={true} />
			<Button buttonText="Submit" onPress={() => null} />
		</>
	);
}
