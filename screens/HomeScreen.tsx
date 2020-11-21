import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "Components/Themed";
import Announcement from "Components/Announcement/Announcement";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<Announcement message="hello there" priority="Urgent" title="Uber" user={{usercolor: "red", username: "Eshman"}} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
