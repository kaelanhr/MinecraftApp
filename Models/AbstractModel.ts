export default class AbstractModel implements IAbstractAttributes {
	constructor(attributes?: Partial<IAbstractAttributes>) {
		if (attributes) {
			if (attributes.id) {
				this.id = attributes.id;
			}
			if (attributes.created) {
				this.created = attributes.created;
			}
			if (attributes.modified) {
				this.modified = attributes.modified;
			}
		}
	}
	public id: string;
	public created: Date;
	public modified: Date;
}

/**
 * All entities have these common attribute.
 */
export interface IAbstractAttributes {
	id: string;
	created: Date;
	modified: Date;
}
