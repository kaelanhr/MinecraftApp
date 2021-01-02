import { StackScreenProps } from "@react-navigation/stack";
import Versus from "Components/Battle/Versus";
import { IPlayerAvatarProps } from "Components/Player/Avatar";
import { PlayerColors } from "constants/Colors";
import React from "react";
import { View, Text } from "react-native";
import { BattleParamList } from "types";
import ScreenBackground from "./ScreenBackground";

export default function VersusScreen({
	navigation,
	route,
}: StackScreenProps<BattleParamList, "VersusScreen">) {
	console.log(route.params)
	return (
		<ScreenBackground isCentred={true}>
			<Versus
				playerOne={{ color: PlayerColors.Blue, username: "DarkWolf_V" }}
				playerTwo={{
					color: route.params.color,
					username: route.params.username,
				}}
			/>
		</ScreenBackground>
	);
}
