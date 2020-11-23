import * as React from "react";
import Announcement from "Components/Announcement/Announcement";
import ScreenBackground from "./ScreenBackground";

export default function HomeScreen() {
	return (
		<ScreenBackground>
			<Announcement
				message="hello there"
				priority="Urgent"
				title="Uber"
				user={{ usercolor: "red", username: "Eshman" }}
			/>
		</ScreenBackground>
	);
}