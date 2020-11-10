import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../Themed";

interface IPlayerAvatarProps {
	username?: string;
	color?: string;
}

export default function Avatar(props: IPlayerAvatarProps) {
	return (
		<View>
			<View style={styles.avatar} />
			<Text style={{ color: props.color }}>{props.username}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	avatar: {
		width: 50,
		height: 50,
		backgroundColor: "black",
		marginBottom: 10
	},
});
