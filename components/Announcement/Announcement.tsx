import { View } from "native-base";
import React from "react";
import { IUser } from "Models/User";
import { AnnouncementType } from "./AnnouncementTypes";

interface IAnnouncementProps {
	title: string;
	priority: AnnouncementType;
	user: IUser;
	message: string;
}

export default function Announcement() {
	return <View></View>;
}
