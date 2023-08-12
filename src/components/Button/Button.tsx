import { ReactNode } from "react";
import styles from "./button.module.scss";
import clsx from "classnames";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
}

const Button = ({ children, className, ...rest }: ButtonType) => {
	return (
		<button
			className={clsx({
				[styles.buttonContainer]: true,
				...(className && { [className]: true }),
			})}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
