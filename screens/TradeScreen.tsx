import Avatar from "Components/Player/Avatar";
import TabSet, { Tab } from "Components/Tabs/TabSet";
import { StyledText } from "Components/Themed";
import { PlayerColors } from "constants/Colors";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import ScreenBackground from "./ScreenBackground";

export default function TradeScreen() {
	return (
		<ScreenBackground>
			<View style={styles.center}>
				<Avatar username="Eshman" color={PlayerColors.Green} />
			</View>

			<View style={styles.container}>
				<TabSet>
					<Tab title={"Transactions"}>
						<StyledText>Transaction Info</StyledText>
					</Tab>
					<Tab title={"Pending"}>
						<StyledText>Pending Trades</StyledText>
					</Tab>
					<Tab title={"New Trade"}>
						<StyledText>Start New Trade</StyledText>
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
		marginTop: 10,
	},
	container: {
		marginTop: 10,
	},
});
