import React, { useState } from "react";
import CheckboxItem from "./CheckboxItem";
import { ICheckboxItem } from "./CheckboxItemType";
interface ICheckboxItemGroupProps {
	list: ICheckboxItem[];
}

interface SelectedOptions {
	id: string;
	selected: boolean;
}

export default function CheckboxItemGroup(props: ICheckboxItemGroupProps) {
	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	const setUpdated = (id: string) => {
		let index = selectedItems.indexOf(id);

		if (index > -1) {
			setSelectedItems(selectedItems.filter((x) => x != id));
		} else {
			setSelectedItems([...selectedItems, id]);
		}
	};

	return (
		<>
			{props.list.map((x) => (
				<CheckboxItem
					displayValue={x.displayValue}
					isSelected={selectedItems.indexOf(x.id) > -1}
					onSelected={() => setUpdated(x.id)}
					key={x.id}
					id={x.id}
				/>
			))}
		</>
	);
}
