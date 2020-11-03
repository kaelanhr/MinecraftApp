export interface IRadioItem {
	displayValue: string;
	id: string;
}

export interface IRadioItemGroup extends IRadioItem {
	onSelected: () => void;
	isSelected: boolean;
}
