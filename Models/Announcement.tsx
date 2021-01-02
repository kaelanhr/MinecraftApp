import AbstractModel, { IAbstractAttributes } from "./AbstractModel";
import { IUser } from "./User";

export interface IAnnouncementAttributes extends IAbstractAttributes {
	/** The title of the announcement */
	title: string;
	/** announcement priority/urgency */
	priority: "Urgent" | "Minor" | "Moderate";
	/** the user who created the announcement */
	user: IUser;
	/** the announcement message */
	message: string;
}

export default class Announcement
	extends AbstractModel
	implements IAnnouncementAttributes {
	constructor(attributes?: Partial<IAnnouncementAttributes>) {
		if (attributes) {
			super(attributes);
			if (attributes.title) {
				this.title = attributes.title;
			}
			if (attributes.priority) {
				this.priority = attributes.priority;
			}
			if (attributes.user) {
				this.user = attributes.user;
			}
			if (attributes.message) {
				this.message = attributes.message;
			}
		}
	}

	public title: string;
	public priority: "Urgent" | "Minor" | "Moderate";
	public user: IUser;
	public message: string;
}
