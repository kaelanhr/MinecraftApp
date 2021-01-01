import * as React from "react";
import ScreenBackground from "./ScreenBackground";
import SelectPlayer from "./SelectPlayer";
import NewBattle from "Components/Battle/NewBattle";

export default function BattleScreen() {
	return (
		<>
			<ScreenBackground isCentred={true}>
				<SelectPlayer />
				<NewBattle />
			</ScreenBackground>
		</>
	);
}
