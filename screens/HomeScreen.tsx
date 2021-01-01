import { StackScreenProps } from "@react-navigation/stack";
import Cog from "assets/images/COG.svg";
import AnnouncementItem from "Components/Announcement/AnnouncementItem";
import * as React from "react";
import { Pressable } from "react-native";
import { RootStackParamList } from "types";
import ScreenBackground from "./ScreenBackground";

export default function HomeScreen({ navigation }: StackScreenProps<RootStackParamList, "Root">) {
	return (
		<ScreenBackground>
			<Pressable
				onPress={() => navigation.navigate("Profile")}
			>
			<Cog height="25" width="25" style={{ alignSelf: "flex-end" }} />
			</Pressable>
			{/* <Plus /> */}
			<AnnouncementItem
				message="hello there"
				priority="Urgent"
				title="Uber"
				user={{ usercolor: "red", username: "Eshman" }}
			/>
		</ScreenBackground>
	);
}
