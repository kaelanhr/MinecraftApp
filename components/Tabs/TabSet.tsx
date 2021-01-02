import { Colors } from "constants/Colors";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ITabSetProps {
	children: React.ReactElement<ITabProps>[];
}

interface ITabProps {
	/** the title of the tab */
	title: string;
	/** the child component to render when the tab is active */
	children?: React.ReactNode;
}

/**
 * Controller component for selecting and displaying current tab,
 * defaults to the first tab being selected.
 * @param props the title and child component for each tab.
 */
export default function TabSet(props: ITabSetProps) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			{/* render titles */}
			<View style={styles.TabTitles}>
				{props.children.map((x, key) => (
					<Pressable
						onPress={() => setActiveTab(key)}
						key={key}
						style={[
							key == activeTab ? styles.ActiveTab : styles.InActiveTab,
							styles.Tab,
						]}
					>
						<Text
							style={[
								key == activeTab ? styles.ActiveText : styles.InactiveText,
								styles.Text,
							]}
						>
							{x.props.title}
						</Text>
					</Pressable>
				))}
			</View>
			{/* render active tab child component */}
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
