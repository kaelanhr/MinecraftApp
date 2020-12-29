import CancelIcon from "assets/images/Cancel.svg";
import * as Layout from "constants/Layout";
import React from "react";

export default function Cancel() {
	return (
		<CancelIcon
			height={Layout.ButtonSize}
			width={Layout.ButtonSize}
		/>
	);
}
