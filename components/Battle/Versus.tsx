import Avatar, { IPlayerAvatarProps } from "Components/Player/Avatar";
import { Colors } from "constants/Colors";
import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

interface IVersusProps {
	playerOne: IPlayerAvatarProps;
	playerTwo: IPlayerAvatarProps;
}

/**
 * Component to display 2 players going up against eachother.
 * @param props the players who will be versing eachother.
 */
export default function Versus(props: IVersusProps) {
	return (
		<View style={styles.Wrapper}>
			<Avatar {...props.playerOne} />
			<View>
				<Text
					style={{
						color: Colors.White,
						fontWeight: "bold",
						fontSize: 30,
						marginTop: 10,
					}}
				>
					VS
				</Text>
			</View>
			<Avatar {...props.playerTwo} />
		</View>
	);
}

const styles = StyleSheet.create({
	Wrapper: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
	},
});
