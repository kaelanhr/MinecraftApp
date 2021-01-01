import ConfirmIcon from "assets/images/Confirm.svg";
import CancelIcon from "assets/images/Cancel.svg";
import PlusIcon from "assets/images/Plus.svg";
import { ButtonSize } from "constants/Layout";
import React from "react";
import { Pressable, PressableProps } from "react-native";

/**
 * Wrapper component to create pressable confirm button
 * @param props pressable props for confirm button.
 */
export function Confirm(props: PressableProps) {
	return (
		<Pressable {...props}>
			<ConfirmIcon height={ButtonSize} width={ButtonSize} />
		</Pressable>
	);
}

/**
 * Wrapper component to create pressable cancel button
 * @param props pressable props for cancel button.
 */
export function Cancel(props: PressableProps) {
	return (
		<Pressable {...props}>
			<CancelIcon height={ButtonSize} width={ButtonSize} />
		</Pressable>
	);
}

/**
 * Wrapper component to create pressable plus button
 * @param props pressable props for plus button.
 */
export function Plus(props: PressableProps) {
	return (
		<Pressable {...props}>
			<PlusIcon height={ButtonSize} width={ButtonSize} />
		</Pressable>
	);
}
