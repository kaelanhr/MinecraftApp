import { StackScreenProps } from "@react-navigation/stack";
import AnnouncementItem from "Components/Announcement/AnnouncementItem";
import { Cog } from "Components/Button/Button";
import Announcement from "Models/Announcement";
import * as React from "react";
import { Pressable } from "react-native";
import { RootStackParamList } from "types";
import ScreenBackground from "./ScreenBackground";

export default function HomeScreen({
	navigation,
}: StackScreenProps<RootStackParamList, "Root">) {
	const testAnnouncement = new Announcement({ id: "1" });
	testAnnouncement.message = "new announcement with class";
	testAnnouncement.priority = "Urgent";
	testAnnouncement.user = { usercolor: "red", username: "Eshman" };
	testAnnouncement.title = "My Title";

	return (
		<ScreenBackground>
			<Cog
				style={{ alignSelf: "flex-end" }}
				onPress={() => navigation.navigate("Profile")}
			/>
			<AnnouncementItem {...testAnnouncement} />
		</ScreenBackground>
	);
}
