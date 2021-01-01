import { StyledText } from "Components/Themed";
import { IUser } from "Models/User";
import { View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

interface IAnnouncementProps {
	/** The title of the announcement */
	title: string;
	priority: "Urgent" | "Minor" | "Moderate";
	user: IUser;
	message: string;
}

/**
 * Component for displaying a single announcement.
 * @param props Contain announcement information.
 */
export default function AnnouncementItem(props: IAnnouncementProps) {
	return (
		<>
			<View style={styles.announcement}>
				<View style={styles.header}>
					<StyledText>{props.title}</StyledText>
					<StyledText>Priority: {props.priority}</StyledText>
					<StyledText>{props.user.username}</StyledText>
				</View>
				<StyledText>{props.message}</StyledText>
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
