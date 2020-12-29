import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { PlayerColors } from "constants/Colors";

interface IPlayerAvatarProps {
	username?: string;
	color: string;
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
