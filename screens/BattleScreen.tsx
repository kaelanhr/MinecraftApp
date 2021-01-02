import * as React from "react";
import ScreenBackground from "./ScreenBackground";
import SelectPlayer from "./SelectPlayer";
import NewBattle from "Components/Battle/NewBattle";
import Versus from "Components/Battle/Versus";
import { PlayerColors } from "constants/Colors";

export default function BattleScreen() {
	return (
		<>
			<ScreenBackground isCentred={true}>
				<Versus
					playerOne={{ color: PlayerColors.Blue, username: "DarkWolf_V" }}
					playerTwo={{ color: PlayerColors.Green, username: "Eshman" }}
				/>
				<SelectPlayer />
				{/* <NewBattle /> */}
			</ScreenBackground>
		</>
	);
}
