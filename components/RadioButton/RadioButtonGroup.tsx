import React, { useEffect, useRef, useState } from "react";
import RadioItem, { IRadioButton } from "./RadioButton";

interface IRadioButtonGroupProps {
	list: IRadioButton[];
}

/**
 * Component to display a collection of radio items.
 * @param props collection of radio buttons.
 */
export default function RadioItemGroup(props: IRadioButtonGroupProps) {
	const [selectedItem, setSelected] = useState<number>(0);

	const updateList = (value: number) => {
		props.list.forEach((element, index) => {
			if (index == value) {
				element.isSelected = true;
			} else {
				element.isSelected = false;
			}
		});

		setSelected(value);
	};

	return (
		<>
			{props.list.map((x, key) => (
				<RadioItem
					displayValue={x.displayValue}
					isSelected={selectedItem == key}
					onSelected={() => updateList(key)}
					key={x.id}
					id={x.id}
				/>
			))}
		</>
	);
}