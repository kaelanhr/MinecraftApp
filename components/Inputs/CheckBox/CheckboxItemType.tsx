export interface ICheckboxItem {
	displayValue: string;
	id: string;
}

export interface ICheckboxItemGroup extends ICheckboxItem {
	onSelected: () => void;
	isSelected: boolean;
}
