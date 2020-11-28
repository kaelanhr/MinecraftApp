import { FontAwesome5, Ionicons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "native-base";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import BattleScreen from "../screens/BattleScreen";
import HomeScreen from "../screens/HomeScreen";
import ProjectScreen from "../screens/ProjectScreen";
import TradeScreen from "../screens/TradeScreen";
import { BottomTabParamList, HomeParamList, ProjectParamList } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			tabBarOptions={{ activeTintColor: "black", activeBackgroundColor: "green" }}
		>
			<BottomTab.Screen
				name="Home"
				component={HomeNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="home-circle"
							size={24}
							color="white"
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Project"
				component={ProjectNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Octicons name="project" size={24} color="white" />
					),
				}}
			/>
			<BottomTab.Screen
				name="Trade"
				component={TradeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="handshake" size={24} color="white" />
					),
				}}
			/>
			<BottomTab.Screen
				name="Battle"
				component={BattleScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="sword-cross"
							size={24}
							color="white"
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
	return (
		<HomeStack.Navigator headerMode="none">
			<HomeStack.Screen name="HomeScreen" component={HomeScreen} />
		</HomeStack.Navigator>
	);
}

const ProjectStack = createStackNavigator<ProjectParamList>();

function ProjectNavigator() {
	return (
		<ProjectStack.Navigator headerMode="none">
			<ProjectStack.Screen
				name="ProjectScreen"
				component={ProjectScreen}
			/>
		</ProjectStack.Navigator>
	);
}
