import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import BattleScreen from "../screens/BattleScreen";
import HomeScreen from "../screens/HomeScreen";
import ProjectScreen from "../screens/ProjectScreen";
import TradeScreen from "../screens/TradeScreen";
import { BottomTabParamList, HomeParamList, ProjectParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
		>
			<BottomTab.Screen
				name="Home"
				component={HomeNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="ios-code" color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name="Project"
				component={ProjectNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="ios-code" color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name="Trade"
				component={TradeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="ios-code" color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name="Battle"
				component={BattleScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="ios-code" color={color} />
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
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ headerTitle: "Tab One Title" }}
			/>
		</HomeStack.Navigator>
	);
}

const ProjectStack = createStackNavigator<ProjectParamList>();

function ProjectNavigator() {
	return (
		<ProjectStack.Navigator>
			<ProjectStack.Screen
				name="ProjectScreen"
				component={ProjectScreen}
				options={{ headerTitle: "Tab Two Title" }}
			/>
		</ProjectStack.Navigator>
	);
}
