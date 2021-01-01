import React, { useState } from "react";
import Checkbox, { ICheckboxProps } from "./Checkbox";

interface ICheckboxGroupProps {
	list: ICheckboxProps[];
}

export default function CheckboxGroup(props: ICheckboxGroupProps) {
	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	const onSelected = (id: string) => {
		let index = selectedItems.indexOf(id);

		// if the item is already selected deselect it by filtering out in a new array
		if (index > -1) {
			setSelectedItems(selectedItems.filter((x) => x != id));
		} else {
			// add the item to selected items list.
			setSelectedItems([...selectedItems, id]);
		}
	};

	return (
		<>
			{props.list.map((x) => (
				<Checkbox
					displayValue={x.displayValue}
					isSelected={selectedItems.indexOf(x.id) > -1}
					onSelected={() => onSelected(x.id)}
					key={x.id}
					id={x.id}
				/>
			))}
		</>
	);
}
