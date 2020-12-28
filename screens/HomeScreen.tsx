import * as React from "react";
import Announcement from "Components/Announcement/Announcement";
import ScreenBackground from "./ScreenBackground";
import Cog from "assets/images/COG.svg";
import Plus from "Components/Icons/Plus";

export default function HomeScreen() {
	return (
		<ScreenBackground>
			<Cog height="25" width="25" style={{alignSelf: "flex-end"}}  />
			<Plus />
			<Announcement
				message="hello there"
				priority="Urgent"
				title="Uber"
				user={{ usercolor: "red", username: "Eshman" }}
			/>
		</ScreenBackground>
	);
}
