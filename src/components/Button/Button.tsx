import { ReactNode } from 'react';
import styles from './button.module.scss'
import clsx from "classnames";

type ButtonType = {
    children: ReactNode;
    type: string;
    className?: string;
};

const Button = ({ children, className, type }: ButtonType) => {
    return (
        <button 
        className={clsx({
            [styles.buttonContainer]: true,
            [styles.buttonContainer]: true,
            ...(className && { [className]: true }),
        })}>
            { children }
        </button>
    )
}

export default Button;