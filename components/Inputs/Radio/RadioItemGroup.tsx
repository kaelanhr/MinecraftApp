import React, { useState } from "react";
import RadioItem from "./RadioItem";
import { IRadioItem } from "./RadioItemType";

interface IRadioItemGroupProps {
	list: IRadioItem[];
}

export default function RadioItemGroup(props: IRadioItemGroupProps) {
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
