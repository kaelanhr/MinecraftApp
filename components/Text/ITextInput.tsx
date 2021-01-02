export interface ITextInput {
	/** the label of the input field. */
	label?: string;
	/** whether the input field can be edited */
	editable?: boolean;
	/** text field placeholder text */
	placeholder?: string;
	/** hide the text input for sensitive input e.g. password */
	secureText?: boolean;
	/** text field current value */
	value?: string;
	/** callback function for when the input is pressed */
	onPress?: Function;
}
