import { ElementType } from "react";

export interface OptionProps {
	target?: any;
	name: string;
	value: string;
}

export interface SelectProps {
	placeholder?: string;
	id?: string;
	value?: string;
	className?: string;
	icon?: ElementType | null;
	options: Array<OptionProps>;
	onChange?: (item: OptionProps) => void;
}

// interface SelectProps {
// 	type?: HTMLInputTypeAttribute;
// 	icon?: ElementType;
// 	placeholder?: string;
// 	id?: string;
// 	className?: string;
// 	value?: string;
// 	onFocus?: () => void;
// 	onChange?: () => void;
// }
