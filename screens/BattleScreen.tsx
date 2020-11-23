import * as React from "react";
import NewBattle from "Components/Battle/NewBattle";
import ScreenBackground from "./ScreenBackground";

export default function BattleScreen() {
	return (
		<>
			<ScreenBackground>
				<NewBattle />
			</ScreenBackground>
		</>
	);
}
