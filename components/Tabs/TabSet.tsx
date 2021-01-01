import * as Colors from "constants/Colors";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ITabSetProps {
	children: React.ReactElement<ITabProps>[];
}

interface ITabProps {
	name: string;
	index: number;
	children?: React.ReactNode;
}

export default function TabSet(props: ITabSetProps) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<View style={styles.TabTitles}>
				{props.children.map((x, key) => (
					<Pressable
						onPress={() => setActiveTab(x.props.index)}
						key={key}
						style={[
							x.props.index == activeTab
								? styles.ActiveTab
								: styles.InActiveTab,
							styles.Tab,
						]}
					>
						<Text
							style={[
								x.props.index == activeTab
									? styles.ActiveText
									: styles.InactiveText,
								styles.Text,
							]}
						>
							{x.props.name}
						</Text>
					</Pressable>
				))}
			</View>
			<View>{props.children[activeTab]}</View>
		</>
	);
}

export function Tab(props: ITabProps) {
	return <>{props.children}</>;
}

const styles = StyleSheet.create({
	TabTitles: {
		flexDirection: "row",
		justifyContent: "space-between",
		borderColor: Colors.Grey,
		borderStyle: "solid",
		borderWidth: 1,
		borderRightWidth: 0,
	},
	Text: {
		textAlign: "center",
		padding: 5,
	},
	InactiveText: {
		color: Colors.Grey,
	},
	ActiveText: {
		color: Colors.White,
	},
	Tab: {
		flexGrow: 1,
		borderColor: Colors.Grey,
		borderStyle: "solid",
		borderRightWidth: 1,
	},
	ActiveTab: {
		backgroundColor: Colors.Green,
	},
	InActiveTab: {
		backgroundColor: Colors.Black,
	},
});
