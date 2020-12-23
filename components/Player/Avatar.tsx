import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "Components/Themed";

interface IPlayerAvatarProps {
	username?: string;
	color?: string;
}

export default function Avatar(props: IPlayerAvatarProps) {
	return (
		<View>
			<Image
				source={{
					uri: `https://minotar.net/avatar/${props.username}.png`,
				}}
				style={styles.avatar}
			/>
			<Text style={{ color: props.color }}>{props.username}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	avatar: {
		width: 50,
		height: 50,
	},
});
