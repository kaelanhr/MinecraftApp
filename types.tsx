export type RootStackParamList = {
	Root: undefined;
	NotFound: undefined;
	Profile: undefined;
};

export type BottomTabParamList = {
	Home: undefined;
	Project: undefined;
	Battle: undefined;
	Trade: undefined;
};

export type HomeParamList = {
	HomeScreen: undefined;
};

export type ProjectParamList = {
	ProjectScreen: undefined;
};

export type BattleParamList = {
	BattleScreen: undefined;
	VersusScreen: { username: string; color: string };
};
