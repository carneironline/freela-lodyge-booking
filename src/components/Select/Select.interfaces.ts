import { ElementType } from "react";

export interface OptionProps {
	name: string;
	value: string;
}

export interface SelectProps {
	placeholder?: string;
	id?: string;
	value?: string;
	className?: string;
	icon?: ElementType;
	options: Array<OptionProps>;
	onChange?: (item: OptionProps) => void;
}
