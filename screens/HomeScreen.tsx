import * as React from "react";
import Announcement from "Components/Announcement/Announcement";
import ScreenBackground from "./ScreenBackground";
import Cog from "assets/images/COG.svg";
import Plus from "Components/Icons/Plus";
import { StackScreenProps } from "@react-navigation/stack";
import { Pressable } from "react-native";
import { RootStackParamList } from "types";

export default function HomeScreen({ navigation }: StackScreenProps<RootStackParamList, "Root">) {
	return (
		<ScreenBackground>
			<Pressable
				onPress={() => navigation.navigate("Profile")}
			>
			<Cog height="25" width="25" style={{ alignSelf: "flex-end" }} />
			</Pressable>
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
