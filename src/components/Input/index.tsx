import { ElementType, HTMLInputTypeAttribute } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

interface InputProps {
	type?: HTMLInputTypeAttribute;
	icon?: ElementType;
	placeholder?: string;
	id?: string;
	className?: string;
	value?: string;
	onFocus?: () => void;
	onChange?: () => void;
}

export function Input({
	type = "text",
	className = "",
	icon: Icon,
	onChange = () => {},
	...rest
}: InputProps) {
	const classIcon = classNames({ "has-icon": !!Icon });
	const elIcon = Icon && <Icon />;

	return (
		<div className={`${styles.container} ${classIcon}`}>
			<div className={styles.icon}>{elIcon}</div>
			<input
				type={type}
				className={`${styles.input} ${className}`}
				onChange={onChange}
				{...rest}
			/>
		</div>
	);
}
