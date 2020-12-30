import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "Components/Themed";
import Avatar from "Components/Player/Avatar";
import ScreenBackground from "./ScreenBackground";
import * as Colors from "constants/Colors";
import TabSet, { Tab } from "Components/Tabs/TabSet";

export default function TradeScreen() {
	return (
		<ScreenBackground>
			<View style={styles.center}>
				<Avatar username="Eshman" color={Colors.PlayerColors.green} />
			</View>

			<View style={styles.container}>
				<TabSet>
					<Tab index={0} name={"Transactions"} key={0}>
						<Text>Blah</Text>
					</Tab>
					<Tab index={1} name={"Pending"} key={1}>
						<Text>Pending Tab</Text>
					</Tab>
					<Tab index={2} name={"New Trade"} key={2}>
						<Text>Other Tab</Text>
					</Tab>
				</TabSet>
			</View>
		</ScreenBackground>
	);
}

const styles = StyleSheet.create({
	center: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10
	},
	container: {
		marginTop: 10
	},
});
