import * as React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenBackground(props: {
	children: React.ReactNode;
	isCentred?: boolean;
}) {
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={props.isCentred ? styles.centerLayout : styles.defaultLayout}
			>
				{props.children}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	centerLayout: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#141414",
	},
	defaultLayout: {
		flex: 1,
		backgroundColor: "#141414",
		marginTop: 10,
	},
	container: {
		flex: 1,
		backgroundColor: "#141414",
	},
});
