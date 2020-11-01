import React from "react";
import { Button } from "react-native";

interface IStyledButtonProps {
	onPress: Function;
	title: string;
}

export default function StyledButton(props: IStyledButtonProps) {
	return <Button onPress={() => {}} title={props.title} color="#06D136" />;
}
