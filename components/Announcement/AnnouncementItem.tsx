import { StyledText } from "Components/Themed";
import { Colors } from "constants/Colors";
import Announcement, { IAnnouncementAttributes } from "Models/Announcement";
import { View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

/**
 * Component for displaying a single announcement.
 * @param props Contain announcement information.
 */
export default function AnnouncementItem(props: Announcement) {
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
		color: Colors.White,
	},
	header: {
		marginBottom: 20,
	},
});
