import * as React from "react";
import ScreenBackground from "./ScreenBackground";
import SelectPlayer from "./SelectPlayer";
import NewBattle from "Components/Battle/NewBattle";
import Versus from "Components/Battle/Versus";
import { PlayerColors } from "constants/Colors";
import { BattleParamList } from "types";
import { StackScreenProps } from "@react-navigation/stack";
import { ConfirmDialog } from "Components/Button/ButtonGroup";
import RadioItemGroup from "Components/RadioButton/RadioButtonGroup";
import { View } from "native-base";

export default function BattleScreen({
	navigation,
}: StackScreenProps<BattleParamList, "BattleScreen">) {
	const users = [
		{ username: "alx91", color: PlayerColors.White },
		{ username: "BLEACH_kyan", color: PlayerColors.White },
		{ username: "AlphaStars", color: PlayerColors.White },
		{ username: "jimmytwofeet", color: PlayerColors.White },
		{ username: "mont18e", color: PlayerColors.Purple },
		{ username: "Aus0", color: PlayerColors.White },
		{ username: "awal89", color: PlayerColors.White },
		{ username: "DarkWolfJKS", color: PlayerColors.Red },
		{ username: "Eshman", color: PlayerColors.Green },
		{ username: "DarkWolf_V", color: PlayerColors.Blue },
	];

	const players = users.map((u) => {
		return {
			id: u.username,
			displayValue: u.username,
			isSelected: false,
		};
	});

	const selectPlayer = () => {
		let selectedId = players.filter((p) => p.isSelected)[0].id;
		return users.filter((u) => u.username == selectedId)[0];
	};

	return (
		<>
			<ScreenBackground isCentred={true}>
				{/* <Versus
					playerOne={{ color: PlayerColors.Blue, username: "DarkWolf_V" }}
					playerTwo={{ color: PlayerColors.Green, username: "Eshman" }}
				/> */}
				{/* <SelectPlayer navigation={navigation} route="B" /> */}
				<View>
					<RadioItemGroup list={players} />
					<ConfirmDialog
						onCancel={() => console.log(players)}
						onConfirm={() =>
							navigation.navigate("VersusScreen", selectPlayer())
						}
					/>
				</View>
				{/* <NewBattle /> */}
			</ScreenBackground>
		</>
	);
}
