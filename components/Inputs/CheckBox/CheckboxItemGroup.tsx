import React from "react";
import { ICheckboxItemProps } from "./CheckboxItemType";

interface ICheckboxItemGroupProps {
	list: ICheckboxItemProps[];
}

export default function CheckboxItemGroup(props: ICheckboxItemGroupProps) {
	return (
		<>
			{/* {props.list.map((x) => (

				<CheckboxItem
					displayValue={x.displayValue}
					isSelected={selectedItem == x.id}
					onSelected={() => setSelected(x.id)}
					key={x.id}
					id={x.id}
				/>
			))} */}
		</>
	);
}
