import React, { useState } from "react";
import RadioItem, { IRadioButton } from "./RadioButton";

interface IRadioButtonGroupProps {
	list: IRadioButton[];
}

/**
 * Component to display a collection of radio items.
 * @param props collection of radio buttons.
 */
export default function RadioItemGroup(props: IRadioButtonGroupProps) {
	const [selectedItem, setSelected] = useState("");

	return (
		<>
			{props.list.map((x) => (
				<RadioItem
					displayValue={x.displayValue}
					isSelected={selectedItem == x.id}
					onSelected={() => setSelected(x.id)}
					key={x.id}
					id={x.id}
				/>
			))}
		</>
	);
}
