import { View } from "native-base";
import React from "react";
import { IUser } from "Models/User";
import { AnnouncementType } from "./AnnouncementTypes";
import { Text } from "Components/Themed";
import { StyleSheet } from "react-native";

interface IAnnouncementProps {
	title: string;
	priority: AnnouncementType;
	user: IUser;
	message: string;
}

export default function Announcement(props: IAnnouncementProps) {
	return (
		<>
			<View style={styles.announcement}>
				<View style={styles.header}>
					<Text>{props.title}</Text>
					<Text>Priority: {props.priority}</Text>
					<Text>{props.user.username}</Text>
				</View>
				<Text>{props.message}</Text>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	announcement: {
		backgroundColor: "#303030",
		width: "95%",
		borderColor: "#707070",
		padding: 10,
		color: "white",
	},
	header: {
		marginBottom: 20,
	},
});
