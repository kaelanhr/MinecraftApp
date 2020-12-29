import PlusIcon from "assets/images/Plus.svg";
import React from "react";
import * as Layout from "constants/Layout";

export default function Plus() {
	return (
		<PlusIcon
			height={Layout.ButtonSize}
			width={Layout.ButtonSize}
		/>
	);
}