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
				<Avatar username="Eshman" color={PlayerColors.green} />
			</View>

			<View style={styles.container}>
				<TabSet>
					<Tab index={0} name={"Transactions"} key={0}>
						<StyledText>Blah</StyledText>
					</Tab>
					<Tab index={1} name={"Pending"} key={1}>
						<StyledText>Pending Tab</StyledText>
					</Tab>
					<Tab index={2} name={"New Trade"} key={2}>
						<StyledText>Other Tab</StyledText>
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
