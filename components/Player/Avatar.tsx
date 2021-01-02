import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export interface IPlayerAvatarProps {
	username?: string;
	color: string;
}

export default function Avatar(props: IPlayerAvatarProps) {
	return (
		<View style={{ alignItems: "center" }}>
			<Image
				source={{
					uri: `https://minotar.net/avatar/${props.username}.png`,
				}}
				style={styles.avatar}
			/>
			<Text style={{ fontSize: 20, marginTop: 10, color: props.color }}>
				{props.username}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	avatar: {
		width: 50,
		height: 50,
	},
});
