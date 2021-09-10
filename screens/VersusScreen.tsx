import { StackScreenProps } from "@react-navigation/stack";
import NewBattle from "Components/Battle/NewBattle";
import Versus from "Components/Battle/Versus";
import { PlayerColors } from "constants/Colors";
import React from "react";
import { BattleParamList } from "types";
import ScreenBackground from "./ScreenBackground";

export default function VersusScreen({
	route,
	navigation
}: StackScreenProps<BattleParamList, "VersusScreen">) {
	return (
		<ScreenBackground isCentred={true}>
			<Versus
				playerOne={{ color: PlayerColors.Blue, username: "DarkWolf_V" }}
				playerTwo={{
					color: route.params.color,
					username: route.params.username,
				}}
			/>
			<NewBattle route={route} navigation={navigation} />
		</ScreenBackground>
	);
}